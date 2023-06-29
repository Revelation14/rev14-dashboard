import axios, { type AxiosError } from 'axios';

import http from '@/lib/axios';
import type { IHttpException } from '@/types/user.types';

export async function AddContributorService(
  credentials: any
): Promise<string | IHttpException | null> {
  try {
    const token = localStorage.getItem('token');
    await http
      .post('/user/create/contributor', credentials, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    return 'contributor created successfully';
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
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU2NGUzNjE2LTAzZTAtNDFhNC05YTBkLWFiNDQ3ZTdmNDVkNyIsInJvbGUiOiJTWVNURU1fQURNSU4iLCJpYXQiOjE2ODgwNDcyNzAsImV4cCI6MTY4ODA1NDQ3MH0.6sRr3v1LWHDNR0FKNRBv7e49IkjLKdgOyyQDydsB9_Y';
    const headers = {
      Authorization: `Bearer ${token}`,
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
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU2NGUzNjE2LTAzZTAtNDFhNC05YTBkLWFiNDQ3ZTdmNDVkNyIsInJvbGUiOiJTWVNURU1fQURNSU4iLCJpYXQiOjE2ODgwNDcyNzAsImV4cCI6MTY4ODA1NDQ3MH0.6sRr3v1LWHDNR0FKNRBv7e49IkjLKdgOyyQDydsB9_Y';
    const headers = {
      Authorization: `Bearer ${token}`,
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
