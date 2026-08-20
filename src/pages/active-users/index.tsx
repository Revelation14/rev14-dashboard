import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { ActiveUserDetail } from '@/components/active-users/active-users-detail';
import { ActiveUserList } from '@/components/active-users/active-users-list';
import { ActiveUserStats } from '@/components/active-users/active-users-stats';
import Pagination from '@/components/common/Pagination';
import SplitScreens from '@/components/common/SplitScreens';
import Layout from '@/layouts/dashboard/Layout';
import { getActiveUsers } from '@/services/active-users.service';
import { useAuth } from '@/store/auth.store';
import usePaginationStore from '@/store/pagination';
import type {
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
  const [isClient, setIsClient] = useState(false);

  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [selectedFilter, setSelectedFilter] = useState<PlatformFilter>('ALL');
  const [sortConfig, setSortConfig] = useState<ISortConfig>({
    field: null,
    direction: null,
  });

  const handleSelectFilter = (filter: PlatformFilter) => {
    setSelectedFilter(filter);
    setPage(1);
    setCurrentPage(1);
  };

  const handleClearFilter = () => handleSelectFilter('ALL');

  const handleSortChange = (field: SortField) => {
    setSortConfig((prevConfig: ISortConfig): ISortConfig => {
      if (prevConfig.field !== field) {
        return { field, direction: 'asc' };
      }
      if (prevConfig.direction === 'asc') {
        return { field, direction: 'desc' };
      }
      if (prevConfig.direction === 'desc') {
        return { field: null, direction: null };
      }
      return { field, direction: 'asc' };
    });
    setPage(1);
    setCurrentPage(1);
  };

  const handleClearSort = () => {
    setSortConfig({ field: null, direction: null });
    setPage(1);
    setCurrentPage(1);
  };

  useEffect(() => {
    setIsClient(true);
    if (!auth.user) {
      router.push('/auth/login');
    }
  }, [auth.user, router]);

  const handlePageChange = (newPage: number) => {
    if (isLoading) return;
    setPage(newPage);
  };

  useEffect(() => {
    if (!auth.accessToken) return;

    setIsLoading(true);

    getActiveUsers({
      page,
      limit,
      token: auth.accessToken,
      platform: selectedFilter,
      sortBy: sortConfig.field,
      sortDir: sortConfig.direction,
    })
      .then((response) => {
        if ('data' in response && response.data) {
          const {
            users: rawUsers,
            totalActiveUsers,
            totalFiltered,
            platformBreakdown,
          } = response.data;

          if (Array.isArray(rawUsers)) {
            setUsers(rawUsers);
          } else {
            setUsers([]);
            toast.error('Invalid user array structure received from backend.');
          }

          const countForPaging = totalFiltered ?? totalActiveUsers ?? 0;
          const calculatedPages = Math.max(
            1,
            Math.ceil(countForPaging / limit)
          );
          setTotalPages(calculatedPages);

          if (platformBreakdown) {
            setStats({
              totalActive: totalActiveUsers ?? 0,
              androidCount: platformBreakdown.android ?? 0,
              iosCount: platformBreakdown.ios ?? 0,
              webCount: platformBreakdown.web ?? 0,
              verifiedCount: 0,
            });
          }
        } else {
          toast.error(response.message || 'Failed to load active users');
        }
      })
      .catch((err: unknown) => {
        const errorMessage =
          err instanceof Error ? err.message : 'An unexpected error occurred';
        toast.error(errorMessage);
        setUsers([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [
    page,
    limit,
    selectedFilter,
    sortConfig.field,
    sortConfig.direction,
    auth.accessToken,
    setTotalPages,
  ]);

  if (!isClient) return null;

  return (
    <>
      <Layout>
        <div className="space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">Active Users</h1>
              <p className="text-xs text-gray-500">
                Telemetry engagement metrics
              </p>
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
                />
              </div>

              <div className="mt-4">
                <Pagination onPageChange={handlePageChange} />
              </div>
            </div>
          )}
        </div>
      </Layout>
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
    </>
  );
}
