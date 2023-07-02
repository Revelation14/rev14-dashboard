import axios from 'axios';
import { toast } from 'react-hot-toast';

export const presetName = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME ?? '';
export const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? '';

export const uploadMultipleFiles = async (
  audios: File[],
  fileType: 'audio' | 'image'
) => {
  // Create an empty array to store the URLs
  const urls: string[] = [];
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
          urls.push(res.data.secure_url);
          resolve(res.data.secure_url);
        })
        .catch((e) => {
          toast.error(
            'Failed to upload files, please try again or check your internet',
            {
              position: 'top-right',
              duration: 4000,
            }
          );
          reject(e);
        });
    });
  });
  // Wait for all the promises to resolve
  await Promise.all(promises);
  // Return the array of URLs
  return urls;
};

export const uploadSingleFile = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', presetName);
    formData.append('cloud_name', cloudName);
    axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      )
      .then((res) => {
        resolve(res.data.secure_url);
      })
      .catch((e) => {
        toast.error(
          'Failed to upload files, please try again or check your internet',
          {
            position: 'top-right',
            duration: 4000,
          }
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
