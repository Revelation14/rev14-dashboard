import type {
  IActiveUsersResponse,
  PlatformFilter,
  SortDirection,
  SortField,
} from '@/types/active-users.types';
import type { IHttpException } from '@/types/common.types';

export interface IGetActiveUsersParams {
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
    token,
    platform = 'ALL',
    sortBy = null,
    sortDir = null,
  } = params;

  try {
    const baseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

    const query = new URLSearchParams({
      page: String(page),
      limit: String(limit),
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
          Authorization: token ?? '',
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
