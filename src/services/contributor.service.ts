import axios, { type AxiosError } from 'axios';

import http from '@/lib/axios';
import type { IEditUser, IHttpException } from '@/types/user.types';

export async function addContributorService(
  credentials: any
): Promise<any | IHttpException | null> {
  try {
    const res = await http.post('/user/create/contributor', credentials, {});
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

export async function getContributorService(): Promise<
  any | IHttpException | null
> {
  try {
    const data = await http.get('/user/all/contributors', {});

    return data;
  } catch (err) {
    const error = err as Error | AxiosError;
    if (axios.isAxiosError(error)) {
      const data = error.response?.data as IHttpException;
      return data;
    }
    return null;
  }
}

export async function suspendContributorService(id: any): Promise<void> {
  try {
    const status = {
      status: 'SUSPENDED',
    };
    await http.put(`/user/update/contributor/${id}`, status, {});
  } catch (err) {
    console.log(err);
  }
}

export async function editContributorService(
  id: any,
  user: IEditUser
): Promise<any | IHttpException | null> {
  try {
    const res = await http.put(`/user/update/contributor/${id}`, user, {});
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
