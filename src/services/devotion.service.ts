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
    const res: AxiosResponse<IHttpResponse<IBibleResponse[]>> = await axios.get(
      'https://api.scripture.api.bible/v1/bibles?language=eng',
      {
        headers: {
          'api-key':
            process.env.NEXT_PUBLIC_BIBLE_API_KEY ||
            process.env.NEXT_PUBLIC_BIBLE_API_KEY2 ||
            '',
        },
      }
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
    const res: AxiosResponse<IHttpResponse<IBibleResponse[]>> = await axios.get(
      `https://api.scripture.api.bible/v1/bibles/${versionId}/books`,
      {
        headers: {
          'api-key':
            process.env.NEXT_PUBLIC_BIBLE_API_KEY ||
            process.env.NEXT_PUBLIC_BIBLE_API_KEY2 ||
            '',
        },
      }
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
  verse: string,
  versionId: string
): Promise<IBiblePassageResponse | IHttpException | null> {
  try {
    const res: AxiosResponse<IHttpResponse<IBiblePassageResponse>> =
      await axios.get(
        `https://api.scripture.api.bible/v1/bibles/${versionId}/passages/${verse}`,
        {
          headers: {
            'api-key':
              process.env.NEXT_PUBLIC_BIBLE_API_KEY ||
              process.env.NEXT_PUBLIC_BIBLE_API_KEY2 ||
              '',
          },
        }
      );

    return res.data.data as IBiblePassageResponse;
  } catch (err) {
    const error = err as Error | AxiosError;
    if (axios.isAxiosError(error)) {
      const data = error.response?.data as IHttpException;
      return data;
    }
    return null;
  }
}
