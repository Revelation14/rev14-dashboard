import axiosInstance from '@/lib/axios';
import type { DateRangeFilter, IActiveUser } from '@/types/active-users.types';
import type { IHttpException } from '@/types/common.types';

// 1. Request Contract for Pagination & Filtering
export interface IGetActiveUsersParams {
  filter?: DateRangeFilter;
  page?: number;
  limit?: number;
}

// 2. Response Contract with Meta Information for Scalability
export interface IActiveUsersResponse {
  data: IActiveUser[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export async function getActiveUsers(
  params: IGetActiveUsersParams = {}
): Promise<IActiveUsersResponse | IHttpException> {
  const { filter = '7d', page = 1, limit = 10 } = params;

  try {
    // Axios GET request to our backend proxy route
    const response = await axiosInstance.get<IActiveUsersResponse>(
      '/dashboard/active-users',
      {
        params: {
          filter,
          page,
          limit,
        },
      }
    );

    // Guaranteed return path for successful HTTP 200 OK
    return response.data;
  } catch (err: unknown) {
    const errorResponse = err as { response?: { data?: IHttpException } };

    return (
      errorResponse.response?.data ?? {
        statusCode: 500,
        message: 'Failed to retrieve active users payload from PostHog proxy',
      }
    );
  }
}
