import axios from 'axios';
import { toast } from 'react-hot-toast';

export const presetName = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME ?? '';
export const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? '';

// Compress images before upload
const compressImage = (
  file: File,
  quality: number = 0.8,
  maxWidth: number = 1920
): Promise<File> => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      // Calculate new dimensions while maintaining aspect ratio
      let { width, height } = img;
      if (width > maxWidth) {
        height = (height * maxWidth) / width;
        width = maxWidth;
      }

      canvas.width = width;
      canvas.height = height;

      // Draw and compress
      ctx?.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            const compressedFile = new File([blob], file.name, {
              type: 'image/jpeg',
              lastModified: Date.now(),
            });
            resolve(compressedFile);
          } else {
            resolve(file); // Fallback to original if compression fails
          }
        },
        'image/jpeg',
        quality
      );
    };

    img.src = URL.createObjectURL(file);
  });
};

// Add optimization parameters to existing Cloudinary URLs
export const addOptimizationToUrl = (url: string): string => {
  if (!url.includes('cloudinary.com')) return url;

  // Insert optimization parameters after '/upload/'
  const optimizationParams = 'q_auto:good,f_auto,dpr_auto';
  return url.replace('/upload/', `/upload/${optimizationParams}/`);
};

export const uploadMultipleFiles = async (
  files: File[],
  fileType: 'audio' | 'image',
  options: {
    quality?: number;
    maxWidth?: number;
    enableCompression?: boolean;
  } = {}
) => {
  const { quality = 0.8, maxWidth = 1920, enableCompression = true } = options;

  // Process files before upload
  const processedFiles = await Promise.all(
    files.map(async (file) => {
      if (
        fileType === 'image' &&
        enableCompression &&
        file.type.startsWith('image/')
      ) {
        // Only compress if file is larger than 500KB
        if (file.size > 500000) {
          console.log(
            `Compressing ${file.name} from ${(file.size / 1024 / 1024).toFixed(
              2
            )}MB`
          );
          return compressImage(file, quality, maxWidth);
        }
      }
      return file;
    })
  );

  const promises = processedFiles.map(async (file, index) => {
    return new Promise<{
      secure_url: string;
      duration?: number;
      public_id: string;
    }>((resolve, reject) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', presetName);
      formData.append('cloud_name', cloudName);

      // Add optimization parameters for images
      if (fileType === 'image') {
        formData.append('quality', 'auto:good'); // Automatic quality optimization
        formData.append('format', 'auto'); // Automatic format selection
      }

      const config = {
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        use_filename: true,
        resource_type: 'auto',
      };
      axios
        .post(
          fileType === 'audio'
            ? `https://api.cloudinary.com/v1_1/${cloudName}/video/upload`
            : `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          formData,
          config
        )
        .then((res) => {
          const originalFile = files[index];
          const originalSize = originalFile ? originalFile.size : 0;
          const optimizedUrl =
            fileType === 'image'
              ? addOptimizationToUrl(res.data.secure_url)
              : res.data.secure_url;

          console.log(
            `Uploaded ${originalFile ? originalFile.name : 'Unknown'}: ${(
              originalSize /
              1024 /
              1024
            ).toFixed(2)}MB`
          );

          resolve({
            secure_url: optimizedUrl,
            duration: res.data.duration,
            public_id: res.data.public_id,
          });
        })
        .catch((e) => {
          toast.error(
            'Failed to upload files, please try again or check your internet'
          );
          reject(e);
        });
    });
  });
  // Wait for all the promises to resolve
  try {
    const results = await Promise.all(promises);
    return results[0]; // Return first result for compatibility
  } catch (error) {
    console.error('Upload failed:', error);
    throw error;
  }
};

export const uploadSingleFile = async (
  file: File,
  options: {
    quality?: number;
    maxWidth?: number;
    enableCompression?: boolean;
    fileType?: 'audio' | 'image';
  } = {}
): Promise<string> => {
  const {
    quality = 0.8,
    maxWidth = 1920,
    enableCompression = true,
    fileType = 'image',
  } = options;

  let processedFile = file;

  // Pre-upload compression for images
  if (
    fileType === 'image' &&
    enableCompression &&
    file.type.startsWith('image/') &&
    file.size > 500000
  ) {
    console.log(
      `Compressing ${file.name} from ${(file.size / 1024 / 1024).toFixed(2)}MB`
    );
    processedFile = await compressImage(file, quality, maxWidth);
    console.log(
      `Compressed to ${(processedFile.size / 1024 / 1024).toFixed(2)}MB`
    );
  }

  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append('file', processedFile);
    formData.append('upload_preset', presetName);
    formData.append('cloud_name', cloudName);

    // Add optimization parameters for images
    if (fileType === 'image') {
      formData.append('quality', 'auto:good');
      formData.append('format', 'auto');
    }

    const config = {
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
      use_filename: true,
      resource_type: 'auto',
    };

    axios
      .post(
        fileType === 'audio'
          ? `https://api.cloudinary.com/v1_1/${cloudName}/video/upload`
          : `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData,
        config
      )
      .then((res) => {
        resolve(
          fileType === 'image'
            ? addOptimizationToUrl(res.data.secure_url)
            : res.data.secure_url
        );
      })
      .catch((e) => {
        console.error(`Upload failed for ${file.name}:`, e);
        toast.error(
          'Failed to upload files, please try again or check your internet'
        );
        reject(e);
      });
  });
};

export const getBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
