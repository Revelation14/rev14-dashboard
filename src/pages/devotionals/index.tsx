/* eslint-disable no-nested-ternary */
import router from 'next/router';
import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

import SplitScreens from '@/components/common/SplitScreens';
import AddDevotion from '@/components/devotions/add-devotion';
import DevotionList from '@/components/devotions/devotion-list';
import ViewDevotion from '@/components/devotions/view-devotion';
import Layout from '@/layouts/dashboard/Layout';
import {
  getDevotionCategories,
  getDevotions,
} from '@/services/devotion.service';
import type { IHttpException } from '@/types/common.types';
import type { IDevotion, IDevotionCategory } from '@/types/devotion.types';

import { getFromLocalStorage, removeFromLocalStorage } from '../../lib/helper';
import { useAuth } from '../../store/auth.store';

const Devotions = () => {
  const [showAddSplitScreens, setShowAddSplitScreens] = useState(false);
  const [showEditSplitScreen, setShowEditSplitScreens] = useState(false);
  const [showViewSplitScreens, setShowViewSplitScreens] = useState(false);
  const [devotions, setDevotions] = useState<IDevotion[]>([]);
  const [devotionCategories, setDevotionCategories] = useState<
    IDevotionCategory[]
  >([]);
  const [allDevotions, setAllDevotions] = useState<IDevotion[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [selectedDevotion, setSelectedDevotion] = useState<
    IDevotion | undefined
  >();
  const [error, setError] = useState<IHttpException>();

  useEffect(() => {
    setLoading(true);
    getDevotions()
      .then((data) => {
        if (Array.isArray(data)) {
          setDevotions(data as IDevotion[]);
          setAllDevotions(data as IDevotion[]);
        } else if (data && typeof data === 'object') {
          setError(data as IHttpException);
        }
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
    getDevotionCategories().then((data) => {
      setDevotionCategories(data as IDevotionCategory[]);
    });
  }, []);

  const [isClient, setIsClient] = useState(false);

  const auth = useAuth();
  const user = JSON.parse(getFromLocalStorage('user'));
  const devotionFromLocalStorage = JSON.parse(
    getFromLocalStorage('selectedDevotion')
  );

  useEffect(() => {
    setIsClient(true);
    if (!auth.user && !user) {
      router.push('/auth/login');
    }
  }, []);

  useEffect(() => {
    if (!selectedDevotion && devotionFromLocalStorage) {
      setSelectedDevotion(devotionFromLocalStorage);
      setShowViewSplitScreens(true);
    }
    return () => {
      removeFromLocalStorage('selectedDevotion');
    };
  }, [devotionFromLocalStorage]);

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
                categories={devotionCategories}
                setShowAddSplitScreens={setShowAddSplitScreens}
                setDevotions={setDevotions}
                setAllDevotions={setAllDevotions}
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
                categories={devotionCategories}
                setShowAddSplitScreens={setShowEditSplitScreens}
                defaultValues={selectedDevotion}
                setDevotions={setDevotions}
                setAllDevotions={setAllDevotions}
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
                setDevotions={setDevotions}
                setAllDevotions={setAllDevotions}
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
