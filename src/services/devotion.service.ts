import axios, { type AxiosError, type AxiosResponse } from 'axios';

import http from '@/lib/axios';
import type { IHttpException, IHttpResponse } from '@/types/common.types';
import type { IDevotion, INewDevotion } from '@/types/devotion.types';

export async function addDevotion(
  newDevotion: INewDevotion
): Promise<IDevotion | IHttpException | null> {
  try {
    const res: AxiosResponse<IHttpResponse<IDevotion>> = await http.post(
      '/post/create',
      newDevotion
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
  id: string
): Promise<IDevotion | IHttpException | null> {
  try {
    const res: AxiosResponse<IHttpResponse<IDevotion>> = await http.put(
      `/post/update/${id}`,
      editedDevotion
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
      '/post/all'
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
