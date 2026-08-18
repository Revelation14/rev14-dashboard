import router from 'next/router';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { ActiveUserDetail } from '@/components/active-users/active-users-detail';
import { ActiveUserList } from '@/components/active-users/active-users-list';
import { ActiveUserStats } from '@/components/active-users/active-users-stats';
import { PaginationFooter } from '@/components/active-users/pagination-footer';
import SplitScreens from '@/components/common/SplitScreens';
import Layout from '@/layouts/dashboard/Layout';
import { getActiveUsers } from '@/services/active-users.service';
import { useAuth } from '@/store/auth.store';
import type {
  DateRangeFilter,
  IActiveUser,
  IUserStats,
} from '@/types/active-users.types';

const ActiveUsersPage = () => {
  // --- 1. State Management ---
  const [users, setUsers] = useState<IActiveUser[]>([]);
  const [stats, setStats] = useState<IUserStats | null>(null);
  const [selectedUser, setSelectedUser] = useState<IActiveUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  // Pagination & Filter State
  const [dateFilter, setDateFilter] = useState<DateRangeFilter>('7d');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState<number>(0);

  const auth = useAuth();

  // --- 2. Client Hydration & Auth Guard ---
  useEffect(() => {
    setIsClient(true);
    if (!auth.user) {
      router.push('/auth/login');
    }
  }, [auth.user]);

  // --- 3. Filter/Limit Change Handler ---
  const handleFilterChange = (range: DateRangeFilter) => {
    setDateFilter(range);
    setPage(1);
  };

  // --- 4. Fetch Active Users Effect ---
  useEffect(() => {
    setIsLoading(true);

    getActiveUsers({ filter: dateFilter, page, limit, token: auth.accessToken })
      .then((response) => {
        // 1. Guard against non-200 or missing payload envelopes[cite: 2]
        if ('data' in response && response.data) {
          const {
            users: rawUsers,
            totalActiveUsers,
            platformBreakdown,
          } = response.data;

          // 2. Defensive check: Enforce Array type before committing to state
          if (Array.isArray(rawUsers)) {
            setUsers(rawUsers);
          } else {
            setUsers([]);
            toast.error('Invalid user array structure received from backend.');
          }

          // 3. Map telemetry stats cleanly into page state
          setTotalCount(totalActiveUsers ?? 0);
          setTotalPages(Math.ceil((totalActiveUsers ?? 0) / limit));

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
  }, [dateFilter, page, limit, auth.accessToken]);

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

            <div className="flex items-center space-x-1 rounded-lg bg-gray-100 p-1">
              {(['24h', '7d', '30d', 'all'] as DateRangeFilter[]).map(
                (range) => (
                  <button
                    key={range}
                    type="button"
                    onClick={() => handleFilterChange(range)}
                    className={`rounded-md px-3 py-1 text-xs font-semibold transition-all ${
                      dateFilter === range
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {range.toUpperCase()}
                  </button>
                )
              )}
            </div>
          </div>

          {/* KPI Stat Cards Summary Row */}
          <ActiveUserStats stats={stats} isLoading={isLoading} />

          {selectedUser ? (
            <SplitScreens
              secondIsLarger
              firstScreen={
                <ActiveUserList
                  users={users}
                  isLoading={isLoading}
                  selectedUser={selectedUser}
                  onSelectUser={setSelectedUser}
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
                />
              </div>

              <div className="mt-4">
                <PaginationFooter
                  page={page}
                  limit={limit}
                  totalCount={totalCount}
                  totalPages={totalPages}
                  onPageChange={(newPage) => setPage(newPage)}
                  onLimitChange={(newLimit) => {
                    setLimit(newLimit);
                    setPage(1);
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </Layout>
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
    </>
  );
};

export default ActiveUsersPage;
