/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
import router from 'next/router';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

import SplitScreens from '@/components/common/SplitScreens';
import AddContributor from '@/components/contributors/add-contributor';
import ContributorList from '@/components/contributors/contributor-list';
import EditContributor from '@/components/contributors/edit-contributor';
import ViewContributor from '@/components/contributors/view-contributor';
import Layout from '@/layouts/dashboard/Layout';
import { editUser } from '@/store/oneUser';

import { getFromLocalStorage } from '../../lib/helper';
import { useAuth } from '../../store/auth.store';
import type { IUser } from '../../types/user.types';
import { EUserRole } from '../../types/user.types';

const Index = () => {
  const [showAddSplitScreens, setShowAddSplitScreens] = useState(false);
  const [showEditSplitScreen, setShowEditSplitScreens] = useState(false);
  const [showViewSplitScreens, setShowViewSplitScreens] = useState(false);
  const [selectedContributor, setSelectedContributor] = useState<
    IUser | undefined
  >();
  const [loading, setLoading] = useState(false);
  const User = editUser();

  const [isClient, setIsClient] = useState(false);

  const auth = useAuth();
  const user = JSON.parse(getFromLocalStorage('user'));

  useEffect(() => {
    setIsClient(true);
    if (!auth.user && !user && !loading) {
      router.push('/auth/login');
    } else if (user && user.role !== EUserRole.SYSTEM_ADMIN) {
      localStorage.clear();
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
            firstIsLarger
            firstScreen={
              <ContributorList
                isLoading={loading}
                setLoading={setLoading}
                showAddSplitScreens={showAddSplitScreens}
                setShowAddSplitScreens={setShowAddSplitScreens}
                setShowViewSplitScreens={setShowViewSplitScreens}
                setShowEditSplitScreens={setShowEditSplitScreens}
                setSelectedContributor={setSelectedContributor}
                selectedContributor={selectedContributor}
              />
            }
            secondScreen={
              <AddContributor setShowAddSplitScreens={setShowAddSplitScreens} />
            }
          />
        ) : showViewSplitScreens ? (
          <SplitScreens
            secondIsLarger
            firstScreen={
              <ContributorList
                isLoading={loading}
                setLoading={setLoading}
                showAddSplitScreens={showViewSplitScreens}
                setShowAddSplitScreens={setShowAddSplitScreens}
                setShowViewSplitScreens={setShowViewSplitScreens}
                setShowEditSplitScreens={setShowEditSplitScreens}
                setSelectedContributor={setSelectedContributor}
                selectedContributor={selectedContributor}
              />
            }
            secondScreen={
              selectedContributor ? (
                <ViewContributor
                  setShowViewSplitScreens={setShowViewSplitScreens}
                  contributor={selectedContributor}
                  rowsPerPage={2}
                />
              ) : (
                <div />
              )
            }
          />
        ) : showEditSplitScreen ? (
          <SplitScreens
            secondIsLarger
            firstScreen={
              <ContributorList
                isLoading={loading}
                setLoading={setLoading}
                showAddSplitScreens={showEditSplitScreen}
                setShowAddSplitScreens={setShowAddSplitScreens}
                setShowViewSplitScreens={setShowViewSplitScreens}
                setShowEditSplitScreens={setShowEditSplitScreens}
                setSelectedContributor={setSelectedContributor}
                selectedContributor={selectedContributor}
              />
            }
            secondScreen={
              <EditContributor
                setShowEditSplitScreens={setShowEditSplitScreens}
                contributor={User.user}
              />
            }
          />
        ) : (
          <div className="min-h-screen rounded-2xl border border-gray-200 bg-white p-6">
            <ContributorList
              isLoading={loading}
              setLoading={setLoading}
              showAddSplitScreens={showAddSplitScreens}
              setShowAddSplitScreens={setShowAddSplitScreens}
              setShowViewSplitScreens={setShowViewSplitScreens}
              setShowEditSplitScreens={setShowEditSplitScreens}
              setSelectedContributor={setSelectedContributor}
              selectedContributor={selectedContributor}
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

export default Index;
