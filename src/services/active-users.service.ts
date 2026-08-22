import type {
  DateRangeFilter,
  IActiveUsersResponse,
  PlatformFilter,
  SortDirection,
  SortField,
} from '@/types/active-users.types';
import type { IHttpException } from '@/types/common.types';

export interface IGetActiveUsersParams {
  filter?: DateRangeFilter;
  page?: number;
  limit?: number;
  token?: string;
  platform?: PlatformFilter;
  sortBy?: SortField | null;
  sortDir?: SortDirection | null;
}

export async function getActiveUsers(
  params: IGetActiveUsersParams = {}
): Promise<IActiveUsersResponse | IHttpException> {
  const {
    page = 1,
    limit = 10,
    filter = '7d',
    token,
    platform = 'ALL',
    sortBy = null,
    sortDir = null,
  } = params;

  if (!token) {
    return {
      statusCode: 401,
      message: 'Authorization token is missing',
    };
  }

  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_SUPABASE_URL || 'http://127.0.0.1:54321';

    const query = new URLSearchParams({
      page: String(page),
      limit: String(limit),
      dateRange: filter,
    });

    if (platform !== 'ALL') {
      query.set('platform', platform);
    }

    if (sortBy) {
      query.set('sortBy', sortBy);
      query.set('sortDir', sortDir ?? 'asc');
    }

    const response = await fetch(
      `${baseUrl}/functions/v1/active-users?${query.toString()}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
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
