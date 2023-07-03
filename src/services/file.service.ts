import type { AxiosError, AxiosResponse } from 'axios';
import axios from 'axios';

import http from '@/lib/axios';
import type {
  IHttpException,
  IHttpResponse,
  IUploaded,
} from '@/types/common.types';

export async function addFile(
  formData: FormData
): Promise<IUploaded | IHttpException | null> {
  try {
    const res: AxiosResponse<IHttpResponse<IUploaded>> = await http.post(
      '/public/files/upload',
      formData
    );
    return res.data.data;
  } catch (err) {
    const error = err as Error | AxiosError;
    if (axios.isAxiosError(error)) {
      const data = error.response?.data as IHttpException;
      return data;
    }
    return null;
  }
}

export async function updateFile(
  formData: FormData,
  id: string
): Promise<IUploaded | IHttpException | null> {
  try {
    const res: AxiosResponse<IHttpResponse<IUploaded>> = await http.put(
      `/post/update/${id}`,
      formData
    );
    return res.data.data;
  } catch (err) {
    const error = err as Error | AxiosError;
    if (axios.isAxiosError(error)) {
      const data = error.response?.data as IHttpException;
      return data;
    }
    return null;
  }
}
