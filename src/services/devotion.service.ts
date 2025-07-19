import axios, { type AxiosError, type AxiosResponse } from 'axios';

import http from '@/lib/axios';
import type { IHttpException, IHttpResponse } from '@/types/common.types';
import type {
  IBiblePassageResponse,
  IBibleResponse,
  IDevotion,
  IDevotionCategory,
  INewDevotion,
} from '@/types/devotion.types';

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

export async function getBibleVersions(): Promise<
  IBibleResponse[] | IHttpException | null
> {
  try {
    const res: AxiosResponse<IHttpResponse<IBibleResponse[]>> = await http.get(
      '/bible/translation?language=english'
    );

    return res.data.data as IBibleResponse[];
  } catch (err) {
    const error = err as Error | AxiosError;
    if (axios.isAxiosError(error)) {
      const data = error.response?.data as IHttpException;
      return data;
    }
    return null;
  }
}

export async function getBibleBooks(
  versionId: string
): Promise<IBibleResponse[] | IHttpException | null> {
  try {
    const res: AxiosResponse<IHttpResponse<IBibleResponse[]>> = await http.get(
      `/bible/books?translation=${versionId}`
    );

    return res.data.data as IBibleResponse[];
  } catch (err) {
    const error = err as Error | AxiosError;
    if (axios.isAxiosError(error)) {
      const data = error.response?.data as IHttpException;
      return data;
    }
    return null;
  }
}

export async function getBiblePassage(
  translation: string,
  book: string,
  verse: string
): Promise<IBiblePassageResponse[][] | IHttpException | null> {
  try {
    const res: AxiosResponse<IHttpResponse<IBiblePassageResponse[][]>> =
      await http.get(
        `/bible/verses?translation=${translation}&book=${book}&verse=${verse}`
      );
    if (res.data.statusCode === 400 || res.data.statusCode === 500) {
      return res.data as IHttpException;
    }
    return res.data.data as IBiblePassageResponse[][];
  } catch (err) {
    const error = err as Error | AxiosError;
    if (axios.isAxiosError(error)) {
      const data = error.response?.data as IHttpException;
      return data;
    }
    return null;
  }
}
