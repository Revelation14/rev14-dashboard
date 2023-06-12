/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
import { useState } from 'react';

import SplitScreens from '@/components/common/SplitScreens';
import AddContributor from '@/components/contributors/add-contributor';
import ContributorList from '@/components/contributors/contributor-list';
import EditContributor from '@/components/contributors/edit-contributor';
import ViewContributor from '@/components/contributors/view-contributor';
import Layout from '@/layouts/dashboard/Layout';

const Index = () => {
  const [showAddSplitScreens, setShowAddSplitScreens] = useState(false);
  const [showEditSplitScreen, setShowEditSplitScreens] = useState(false);
  const [showViewSplitScreens, setShowViewSplitScreens] = useState(false);

  return (
    <Layout>
      {showAddSplitScreens ? (
        <SplitScreens
          firstIsLarger
          firstScreen={
            <ContributorList
              showAddSplitScreens={showAddSplitScreens}
              setShowAddSplitScreens={setShowAddSplitScreens}
              setShowViewSplitScreens={setShowViewSplitScreens}
              setShowEditSplitScreens={setShowEditSplitScreens}
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
              showAddSplitScreens={showViewSplitScreens}
              setShowAddSplitScreens={setShowAddSplitScreens}
              setShowViewSplitScreens={setShowViewSplitScreens}
              setShowEditSplitScreens={setShowEditSplitScreens}
            />
          }
          secondScreen={
            <ViewContributor
              setShowViewSplitScreens={setShowViewSplitScreens}
              contributor={{
                firstName: 'Ava',
                lastName: 'Gregoraci',
                type: 'Submitter',
              }}
              devotions={[
                {
                  title: 'Purity of the Soul',
                  date: '2023-05-14T22:03:30.000Z',
                  description:
                    'Comets are a big source of meteoroids because of the nature of those long tails. A large amount of dust.',
                  user: { firstName: 'Ava', lastName: 'Gregoraci' },
                  views: 20,
                  status: 'published',
                },
                {
                  title: 'Purity of the Soul 2',
                  date: '2023-05-14T22:03:30.000Z',
                  description:
                    'Comets are a big source of meteoroids because of the nature of those long tails. A large amount of dust.',
                  user: { firstName: 'Ava', lastName: 'Gregoraci' },
                  views: 20,
                  status: 'published',
                },
              ]}
              rowsPerPage={2}
            />
          }
        />
      ) : showEditSplitScreen ? (
        <SplitScreens
          secondIsLarger
          firstScreen={
            <ContributorList
              showAddSplitScreens={showEditSplitScreen}
              setShowAddSplitScreens={setShowAddSplitScreens}
              setShowViewSplitScreens={setShowViewSplitScreens}
              setShowEditSplitScreens={setShowEditSplitScreens}
            />
          }
          secondScreen={
            <EditContributor
              setShowEditSplitScreens={setShowEditSplitScreens}
              contributor={{
                firstName: 'Ava',
                lastName: 'Gregoraci',
                type: 'Submitter',
              }}
            />
          }
        />
      ) : (
        <div className="min-h-screen rounded-2xl border border-gray-200 bg-white p-6">
          <ContributorList
            showAddSplitScreens={showAddSplitScreens}
            setShowAddSplitScreens={setShowAddSplitScreens}
            setShowViewSplitScreens={setShowViewSplitScreens}
            setShowEditSplitScreens={setShowEditSplitScreens}
          />
        </div>
      )}
    </Layout>
  );
};

export default Index;
