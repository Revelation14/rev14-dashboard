import axios, { type AxiosError } from 'axios';

import http from '@/lib/axios';
import type { IEditUser, IHttpException } from '@/types/user.types';

export async function AddContributorService(
  credentials: any
): Promise<any | IHttpException | null> {
  try {
    const token = localStorage.getItem('token');
    const data = await http.post('/user/create/contributor', credentials, {
      headers: {
        Authorization: `${token}`,
      },
    });
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

export async function GetContributorService(): Promise<
  any | IHttpException | null
> {
  try {
    const testToken = localStorage.getItem('token') || '';
    const modifiedToken = testToken.replace(/^"(.*)"$/, '$1');
    const headers = {
      Authorization: `${modifiedToken}`,
    };

    const data = await axios.get(
      'https://grace.fly.dev/api/v1/user/all/contributors',
      {
        headers,
      }
    );

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
    const testToken = localStorage.getItem('token') || '';
    const modifiedToken = testToken.replace(/^"(.*)"$/, '$1');
    const headers = {
      Authorization: `Bearer ${modifiedToken}`,
    };
    const status = {
      status: 'SUSPENDED',
    };
    await axios.put(
      `https://grace.fly.dev/api/v1/user/update/contributor/${id}`,
      status,
      {
        headers,
      }
    );
  } catch (err) {
    console.log(err);
  }
}

export async function editContributorService(
  id: any,
  user: IEditUser
): Promise<any | IHttpException | null> {
  try {
    const testToken = localStorage.getItem('token') || '';
    const modifiedToken = testToken.replace(/^"(.*)"$/, '$1');
    const headers = {
      Authorization: `${modifiedToken}`,
    };

    const data = await axios.put(
      `https://grace.fly.dev/api/v1/user/update/contributor/${id}`,
      user,
      {
        headers,
      }
    );
    console.log(data.data.data);
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
