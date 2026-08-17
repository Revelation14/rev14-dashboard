import type {
  DateRangeFilter,
  IActiveUsersResponse,
} from '@/types/active-users.types';
import type { IHttpException } from '@/types/common.types';

export interface IGetActiveUsersParams {
  filter?: DateRangeFilter;
  page?: number;
  limit?: number;
  token?: string;
}

export async function getActiveUsers(
  params: IGetActiveUsersParams = {}
): Promise<IActiveUsersResponse | IHttpException> {
  const { page = 1, limit = 10, filter = '7d', token } = params;

  if (!token) {
    return {
      statusCode: 401,
      message: 'Authorization token is missing',
    };
  }

  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_SUPABASE_URL || 'http://127.0.0.1:54321';

    const response = await fetch(
      `${baseUrl}/functions/v1/active-users?page=${page}&limit=${limit}&filter=${filter}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      return {
        statusCode: response.status,
        message: `Edge function returned status: ${response.status}`,
      };
    }

    const data = await response.json();

    return data as IActiveUsersResponse;
  } catch (err: unknown) {
    return {
      statusCode: 500,
      message: err instanceof Error ? err.message : 'Network error occurred',
    };
  }
}
