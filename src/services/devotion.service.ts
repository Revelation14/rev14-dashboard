import axios, { type AxiosError, type AxiosResponse } from 'axios';

import http from '@/lib/axios';
import type { IHttpException, IHttpResponse } from '@/types/common.types';
import type {
  IDevotion,
  IDevotionCategory,
  INewDevotion,
} from '@/types/devotion.types';

export async function addDevotion(
  newDevotion: INewDevotion,
  coverImage?: File,
  audio?: File
): Promise<IDevotion | IHttpException | null> {
  const formData = new FormData();
  formData.append('title', newDevotion.title);
  formData.append('verse', newDevotion.verse);
  formData.append('speaker', newDevotion.speaker);
  formData.append('content', newDevotion.content);
  formData.append('category', newDevotion.category);
  formData.append('releaseDate', newDevotion.releaseDate);
  formData.append('status', newDevotion.status);
  formData.append('createdBy', newDevotion.createdBy);

  if (coverImage) formData.append('coverImage', coverImage);
  if (audio) formData.append('audio', audio);

  try {
    const res: AxiosResponse<IHttpResponse<IDevotion>> = await http.post(
      '/post/create',
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
    if (res.data.data?.id) {
      return res.data.data as IDevotion;
    }

    return res.data as unknown as IHttpException;
  } catch (err) {
    const error = err as Error | AxiosError;
    if (axios.isAxiosError(error)) {
      const data = error.response?.data as IHttpException;
      return data;
    }
    return null;
  }
}

export async function updateDevotion(
  editedDevotion: INewDevotion,
  id: string,
  coverImage?: File,
  audio?: File
): Promise<IDevotion | IHttpException | null> {
  const formData = new FormData();
  formData.append('title', editedDevotion.title);
  formData.append('verse', editedDevotion.verse);
  formData.append('speaker', editedDevotion.speaker);
  formData.append('content', editedDevotion.content);
  formData.append('category', editedDevotion.category);
  formData.append('releaseDate', editedDevotion.releaseDate);
  formData.append('status', editedDevotion.status);
  formData.append('createdBy', editedDevotion.createdBy);

  formData.append('coverImage', editedDevotion.coverImage);
  formData.append('attachments', JSON.stringify(editedDevotion.attachments));
  formData.append('timestamp', editedDevotion.timestamp);

  if (coverImage) formData.append('cover', coverImage);
  if (audio) formData.append('audio', audio);

  try {
    const res: AxiosResponse<IHttpResponse<IDevotion>> = await http.put(
      `/post/update/${id}`,
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
    if (res.data.data?.id) {
      return res.data.data as IDevotion;
    }

    return res.data as unknown as IHttpException;
  } catch (err) {
    const error = err as Error | AxiosError;
    if (axios.isAxiosError(error)) {
      const data = error.response?.data as IHttpException;
      return data;
    }
    return null;
  }
}

export async function getDevotions(): Promise<
  IDevotion[] | IHttpException | null
> {
  try {
    const res: AxiosResponse<IHttpResponse<IDevotion[]>> = await http.get(
      '/post/dashboard'
    );

    return res.data.data;
  } catch (err) {
    const error = err as Error | AxiosError;
    if (axios.isAxiosError(error)) {
      const data = error.response?.data as IHttpException;
      return data;
    }
  }
  return null;
}

export async function getDevotionsByContributor(
  contributorId: string
): Promise<IDevotion[] | IHttpException | null> {
  try {
    const res: AxiosResponse<IHttpResponse<IDevotion[]>> = await http.get(
      `/post/all/${contributorId}`
    );

    return res.data.data;
  } catch (err) {
    const error = err as Error | AxiosError;
    if (axios.isAxiosError(error)) {
      const data = error.response?.data as IHttpException;
      return data;
    }
  }
  return null;
}

export async function deleteDevotion(
  id: string
): Promise<IHttpException | null> {
  try {
    return await http.delete(`/post/delete/${id}`);
  } catch (err) {
    const error = err as Error | AxiosError;
    if (axios.isAxiosError(error)) {
      const data = error.response?.data as IHttpException;
      return data;
    }
    return null;
  }
}

export async function getDevotionCategories(): Promise<
  IDevotionCategory[] | IHttpException | null
> {
  try {
    const res: AxiosResponse<IHttpResponse<IDevotionCategory[]>> =
      await http.get('/devotion-categories/all');

    return res.data.data;
  } catch (err) {
    const error = err as Error | AxiosError;
    if (axios.isAxiosError(error)) {
      const data = error.response?.data as IHttpException;
      return data;
    }
  }
  return null;
}
