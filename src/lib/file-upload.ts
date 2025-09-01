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

export const uploadMultipleFiles = async (
  audios: File[],
  fileType: 'audio' | 'image'
) => {
  // Create an empty array to store the URLs
  const urls: Array<{ secure_url: string; duration: number }> = [];
  // Use Promise.all to upload all the files at once
  const promises = audios.map(async (audio) => {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append('file', audio);
      formData.append('upload_preset', presetName);
      formData.append('cloud_name', cloudName);
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
          // Push the URL to the array
          urls.push(res.data);
          resolve(res.data);
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
  await Promise.all(promises);
  // Return the array of URLs
  return urls[0];
};

export const uploadSingleFile = async (
  file: File,
  options: {
    quality?: number;
    maxWidth?: number;
    enableCompression?: boolean;
  } = {}
): Promise<string> => {
  const { quality = 0.8, maxWidth = 1920, enableCompression = true } = options;

  let processedFile = file;

  // Pre-upload compression for images
  if (
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

    const config = {
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
      use_filename: true,
      resource_type: 'auto',
    };

    axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData,
        config
      )
      .then((res) => {
        resolve(res.data.secure_url);
      })
      .catch((e) => {
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
