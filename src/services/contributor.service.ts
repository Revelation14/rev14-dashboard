import type { AxiosError, AxiosResponse } from 'axios';
import axios from 'axios';

import http from '@/lib/axios';
import { EStatus, type IEditUser, type IUser } from '@/types/user.types';

import type { IHttpException, IHttpResponse } from '../types/common.types';

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
  IUser[] | IHttpException | null
> {
  try {
    const data: AxiosResponse<IHttpResponse<IUser[]>> = await http.get(
      '/user/all/contributors',
      {}
    );
    return data.data.data;
  } catch (err) {
    const error = err as Error | AxiosError;
    if (axios.isAxiosError(error)) {
      const data = error.response?.data as IHttpException;
      return data;
    }
    return null;
  }
}

export async function suspendContributorService(
  id: string
): Promise<IHttpException | IUser | null> {
  try {
    const status = {
      status: EStatus.SUSPENDED,
    };
    const res = await http.put(`/user/update/contributor/${id}`, status, {});
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

export async function editContributorService(
  id: string,
  user: IEditUser
): Promise<IUser | IHttpException | null> {
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
