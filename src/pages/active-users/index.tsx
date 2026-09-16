import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { ActiveUserDetail } from '@/components/active-users/active-users-detail';
import { ActiveUserList } from '@/components/active-users/active-users-list';
import { ActiveUserStats } from '@/components/active-users/active-users-stats';
import { DateRangeDropdown } from '@/components/active-users/DateRangeDropdown';
import Pagination from '@/components/common/Pagination';
import SplitScreens from '@/components/common/SplitScreens';
import Layout from '@/layouts/dashboard/Layout';
import { getActiveUsers } from '@/services/active-users.service';
import { useAuth } from '@/store/auth.store';
import usePaginationStore from '@/store/pagination';
import type {
  DateRangeFilter,
  IActiveUser,
  ISortConfig,
  IUserStats,
  PlatformFilter,
  SortField,
} from '@/types/active-users.types';

export default function ActiveUsersPage() {
  const router = useRouter();
  const auth = useAuth();
  const { setTotalPages, setCurrentPage } = usePaginationStore();

  const [users, setUsers] = useState<IActiveUser[]>([]);
  const [stats, setStats] = useState<IUserStats | null>(null);
  const [selectedUser, setSelectedUser] = useState<IActiveUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [dateRange, setDateRange] = useState<DateRangeFilter>('7d');
  const [selectedFilter, setSelectedFilter] = useState<PlatformFilter>('ALL');
  const [sortConfig, setSortConfig] = useState<ISortConfig>({
    field: null,
    direction: null,
  });

  const [refreshTick, setRefreshTick] = useState(0);
  const pendingManualRefreshRef = useRef(false);

  const handleDateRangeChange = (range: DateRangeFilter) => {
    setDateRange(range);
    setPage(1);
    setCurrentPage(1);
  };

  const fetchUsers = useCallback(
    async (showRefreshIndicator = false) => {
      if (!auth.accessToken) return;

      if (showRefreshIndicator) {
        setIsRefreshing(true);
      } else {
        setIsLoading(true);
      }

      try {
        const response = await getActiveUsers({
          page,
          limit,
          token: auth.accessToken,
          platform: selectedFilter,
          filter: dateRange,
          sortBy: sortConfig.field,
          sortDir: sortConfig.direction,
        });

        if ('data' in response && response.data) {
          const {
            users: rawUsers,
            totalActiveUsers,
            totalFiltered,
            platformBreakdown,
          } = response.data;

          setUsers(Array.isArray(rawUsers) ? rawUsers : []);

          const countForPaging = totalFiltered ?? totalActiveUsers ?? 0;
          setTotalPages(Math.max(1, Math.ceil(countForPaging / limit)));

          if (platformBreakdown) {
            setStats({
              totalActive: totalActiveUsers ?? 0,
              androidCount: platformBreakdown.android ?? 0,
              iosCount: platformBreakdown.ios ?? 0,
              webCount: platformBreakdown.web ?? 0,
              verifiedCount: 0,
            });
          }

          if (showRefreshIndicator) {
            toast.success('Active users refreshed');
          }
        } else {
          toast.error(response.message || 'Failed to load active users');
        }
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error
            ? err.message
            : 'An error occurred while fetching';
        toast.error(errorMessage);
        setUsers([]);
      } finally {
        setIsLoading(false);
        setIsRefreshing(false);
      }
    },
    [
      auth.accessToken,
      page,
      limit,
      dateRange,
      selectedFilter,
      sortConfig.field,
      sortConfig.direction,
      setTotalPages,
    ]
  );

  useEffect(() => {
    setIsClient(true);
    if (!auth.user) {
      router.push('/auth/login');
    }
  }, [auth.user, router]);

  useEffect(() => {
    const isManualRefresh = pendingManualRefreshRef.current;
    pendingManualRefreshRef.current = false;
    fetchUsers(isManualRefresh);
  }, [fetchUsers, refreshTick]);

  const handleSelectFilter = (filter: PlatformFilter) => {
    setSelectedFilter(filter);
    setPage(1);
    setCurrentPage(1);
  };

  const handleClearFilter = () => handleSelectFilter('ALL');

  const handleSortChange = (field: SortField) => {
    setSortConfig((prev) => {
      if (prev.field !== field) return { field, direction: 'asc' };
      if (prev.direction === 'asc') return { field, direction: 'desc' };
      return { field: null, direction: null };
    });
    setPage(1);
    setCurrentPage(1);
  };

  const handleClearSort = () => {
    setSortConfig({ field: null, direction: null });
    setPage(1);
    setCurrentPage(1);
  };

  const handleManualRefresh = () => {
    pendingManualRefreshRef.current = true;
    setSelectedUser(null);
    setSelectedFilter('ALL');
    setSortConfig({ field: null, direction: null });
    setDateRange('7d');
    setPage(1);
    setCurrentPage(1);
    setRefreshTick((tick) => tick + 1);
  };

  if (!isClient) return null;

  return (
    <>
      <Layout>
        <div className="space-y-6">
          {/* Header section with title and manual Refresh action */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">Active Users</h1>
              <p className="text-xs text-gray-500">
                Live app engagement & recency telemetry
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleManualRefresh}
                disabled={isLoading || isRefreshing}
                title="Refresh data"
                aria-label="Refresh data"
                className="flex size-9 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm transition-all hover:bg-indigo-500 disabled:opacity-50"
              >
                <svg
                  className={`size-4 ${isRefreshing ? 'animate-spin' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </button>

              <DateRangeDropdown
                value={dateRange}
                onChange={handleDateRangeChange}
              />
            </div>
          </div>
          <ActiveUserStats
            stats={stats}
            isLoading={isLoading}
            selectedFilter={selectedFilter}
            onSelectFilter={handleSelectFilter}
          />

          {selectedUser ? (
            <SplitScreens
              secondIsLarger
              firstScreen={
                <ActiveUserList
                  users={users}
                  isLoading={isLoading}
                  selectedUser={selectedUser}
                  onSelectUser={setSelectedUser}
                  selectedFilter={selectedFilter}
                  onClearFilter={handleClearFilter}
                  sortConfig={sortConfig}
                  onSortChange={handleSortChange}
                  onClearSort={handleClearSort}
                  dateRange={dateRange}
                />
              }
              secondScreen={
                <ActiveUserDetail
                  user={selectedUser}
                  onClose={() => setSelectedUser(null)}
                />
              }
            />
          ) : (
            <div className="flex min-h-[calc(100vh-100px)] flex-col rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex-1">
                <ActiveUserList
                  users={users}
                  isLoading={isLoading}
                  selectedUser={selectedUser}
                  onSelectUser={setSelectedUser}
                  selectedFilter={selectedFilter}
                  onClearFilter={handleClearFilter}
                  sortConfig={sortConfig}
                  onSortChange={handleSortChange}
                  onClearSort={handleClearSort}
                  dateRange={dateRange}
                />
              </div>

              <div className="mt-4">
                <Pagination onPageChange={(p) => setPage(p)} />
              </div>
            </div>
          )}
        </div>
      </Layout>
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
    </>
  );
}
