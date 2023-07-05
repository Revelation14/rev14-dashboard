import type { AxiosError, AxiosResponse } from 'axios';
import axios from 'axios';

import http from '@/lib/axios';

import type { IHttpException, IHttpResponse } from '../types/common.types';
import type { Data } from '../types/stats.types';

export async function fetchStatsService(): Promise<
  Data | IHttpException | null
> {
  try {
    const res: AxiosResponse<IHttpResponse<Data>> = await http.get(
      '/stats/all'
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

export async function fetchUsersService(): Promise<
  any | IHttpException | null
> {
  try {
    const res = await http.get('/user/all/users', {});

    return res.data;
  } catch (err) {
    const error = err as Error | AxiosError;
    if (axios.isAxiosError(error)) {
      const data = error.response?.data as IHttpException;
      return data;
    }
    return null;
  }
}
