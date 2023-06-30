/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';

import Button from '@/components/common/Button';
import { Tab, Tabs } from '@/components/common/Tabs';
import { getContributorService } from '@/services/contributor.service';

import Spinner from '../common/Spinner';
import TableComponent from '../common/table';

interface IContributorList {
  showAddSplitScreens: boolean;
  setShowAddSplitScreens: React.Dispatch<React.SetStateAction<boolean>>;
  setShowViewSplitScreens: React.Dispatch<React.SetStateAction<boolean>>;
  setShowEditSplitScreens: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContributorList: React.FC<IContributorList> = ({
  showAddSplitScreens,
  setShowAddSplitScreens,
  setShowEditSplitScreens,
  setShowViewSplitScreens,
}) => {
  const [isLoading, setLoading] = useState(false);

  const [users, setUsers] = React.useState<any>([]);
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getContributorService();
      const { data } = response.data;
      // order data by updatedAt
      data.sort((a: any, b: any) => {
        return (
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        );
      });
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (!users) {
    return <div>Loading...</div>;
  }

  return (
    <Tabs
      activeIndex={0}
      headerComponent={
        !showAddSplitScreens && (
          <Button
            icon="/assets/icons/person-add-sharp.svg"
            text="Add contributors"
            className="hover:bg-gold/75"
            handleClick={() => {
              setShowAddSplitScreens(true);
            }}
          />
        )
      }
      hasBorder={false}
    >
      <Tab label="All">
        {isLoading ? (
          <div className="flex h-screen w-full items-center justify-center">
            <Spinner className="h-5 w-5" />
          </div>
        ) : (
          <TableComponent
            users={users}
            showAddSplitScreens={showAddSplitScreens}
            setShowAddSplitScreens={setShowAddSplitScreens}
            setShowEditSplitScreens={setShowEditSplitScreens}
            setShowViewSplitScreens={setShowViewSplitScreens}
            setLoading={setLoading}
          />
        )}
      </Tab>
      <Tab label="Suspended">
        <TableComponent
          users={users.filter(
            (user: { status: string }) => user.status === 'SUSPENDED'
          )}
          showAddSplitScreens={showAddSplitScreens}
          setShowAddSplitScreens={setShowAddSplitScreens}
          setShowEditSplitScreens={setShowEditSplitScreens}
          setShowViewSplitScreens={setShowViewSplitScreens}
          setLoading={setLoading}
        />
      </Tab>
    </Tabs>
  );
};

export default ContributorList;
