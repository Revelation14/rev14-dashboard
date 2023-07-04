/* eslint-disable no-nested-ternary */
import router from 'next/router';
import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

import SplitScreens from '@/components/common/SplitScreens';
import AddDevotion from '@/components/devotions/add-devotion';
import DevotionList from '@/components/devotions/devotion-list';
import ViewDevotion from '@/components/devotions/view-devotion';
import Layout from '@/layouts/dashboard/Layout';
import { getDevotions } from '@/services/devotion.service';
import type { IDevotion } from '@/types/devotion.types';

import { getFromLocalStorage } from '../../lib/helper';
import { useAuth } from '../../store/auth.store';

const Devotions = () => {
  const [showAddSplitScreens, setShowAddSplitScreens] = useState(false);
  const [showEditSplitScreen, setShowEditSplitScreens] = useState(false);
  const [showViewSplitScreens, setShowViewSplitScreens] = useState(false);
  const [devotions, setDevotions] = useState<IDevotion[]>([]);
  const [allDevotions, setAllDevotions] = useState<IDevotion[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [selectedDevotion, setSelectedDevotion] = useState<
    IDevotion | undefined
  >();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setLoading(true);
    getDevotions()
      .then((data) => {
        setDevotions(data as IDevotion[]);
        setAllDevotions(data as IDevotion[]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err as Error);
        setLoading(false);
      });
  }, []);

  const [isClient, setIsClient] = useState(false);

  const auth = useAuth();
  const user = JSON.parse(getFromLocalStorage('user'));

  useEffect(() => {
    setIsClient(true);
    if (!auth.user && !user) {
      router.push('/auth/login');
    }
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <Layout>
        {showAddSplitScreens ? (
          <SplitScreens
            firstScreen={
              <DevotionList
                showAddSplitScreens={showAddSplitScreens}
                setShowAddSplitScreens={setShowAddSplitScreens}
                setShowViewSplitScreens={setShowViewSplitScreens}
                devotions={devotions ?? []}
                allDevotions={allDevotions ?? []}
                setDevotions={setDevotions}
                setSelectedDevotion={setSelectedDevotion}
                error={error}
                loading={isLoading}
              />
            }
            secondScreen={
              <AddDevotion
                setShowAddSplitScreens={setShowAddSplitScreens}
                setDevotions={setDevotions}
              />
            }
          />
        ) : showEditSplitScreen ? (
          <SplitScreens
            firstScreen={
              <DevotionList
                showAddSplitScreens={showEditSplitScreen}
                setShowAddSplitScreens={setShowAddSplitScreens}
                setShowViewSplitScreens={setShowViewSplitScreens}
                devotions={devotions ?? []}
                allDevotions={allDevotions ?? []}
                setSelectedDevotion={setSelectedDevotion}
                error={error}
                loading={isLoading}
                setDevotions={setDevotions}
              />
            }
            secondScreen={
              <AddDevotion
                setShowAddSplitScreens={setShowEditSplitScreens}
                defaultValues={selectedDevotion}
                setDevotions={setDevotions}
              />
            }
          />
        ) : showViewSplitScreens ? (
          <SplitScreens
            secondIsLarger
            firstScreen={
              <DevotionList
                showAddSplitScreens
                setShowAddSplitScreens={setShowAddSplitScreens}
                setShowViewSplitScreens={setShowViewSplitScreens}
                setSelectedDevotion={setSelectedDevotion}
                devotions={devotions ?? []}
                allDevotions={allDevotions ?? []}
                setDevotions={setDevotions}
                error={error}
                loading={isLoading}
              />
            }
            secondScreen={
              <ViewDevotion
                setShowViewSplitScreens={setShowViewSplitScreens}
                setShowEditSplitScreens={setShowEditSplitScreens}
                devotion={selectedDevotion}
                attachments={selectedDevotion?.attachments ?? []}
                numberOfViews={20}
                setDevotions={setDevotions}
              />
            }
          />
        ) : (
          <div className="min-h-screen rounded-2xl border border-gray-200 bg-white p-6">
            <DevotionList
              showAddSplitScreens={showAddSplitScreens}
              setShowAddSplitScreens={setShowAddSplitScreens}
              setShowViewSplitScreens={setShowViewSplitScreens}
              devotions={devotions ?? []}
              allDevotions={allDevotions ?? []}
              setDevotions={setDevotions}
              setSelectedDevotion={setSelectedDevotion}
              error={error}
              loading={isLoading}
            />
          </div>
        )}
      </Layout>
      <Toaster
        toastOptions={{
          duration: 1500,
        }}
        position="top-center"
      />
    </>
  );
};

export default Devotions;
