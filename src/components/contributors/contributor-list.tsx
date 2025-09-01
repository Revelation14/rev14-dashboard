/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import Button from '@/components/common/Button';
import { Tab, Tabs } from '@/components/common/Tabs';
import {
  getContributorService,
  suspendContributorService,
} from '@/services/contributor.service';
import type { IHttpException } from '@/types/common.types';
import type { IUser } from '@/types/user.types';
import { EStatus } from '@/types/user.types';

import ConfirmPopup from '../common/ConfirmPopup';
import NoDataAvailable from '../common/NoDataAvailable';
import Spinner from '../common/Spinner';
import TableComponent from '../common/table';

interface IContributorList {
  showAddSplitScreens: boolean;
  setShowAddSplitScreens: React.Dispatch<React.SetStateAction<boolean>>;
  setShowViewSplitScreens: React.Dispatch<React.SetStateAction<boolean>>;
  setShowEditSplitScreens: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedContributor: React.Dispatch<
    React.SetStateAction<IUser | undefined>
  >;
  selectedContributor?: IUser;
  isLoading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContributorList: React.FC<IContributorList> = ({
  showAddSplitScreens,
  setShowAddSplitScreens,
  setShowEditSplitScreens,
  setShowViewSplitScreens,
  setSelectedContributor,
  selectedContributor,
  isLoading,
  setLoading,
}) => {
  const [users, setUsers] = React.useState<IUser[]>([]);
  const [suspendUsers, setSuspendedUsers] = React.useState<IUser[]>([]);
  const [showSuspendConfirmation, setShowSuspendConfirmation] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const contributors = await getContributorService();
      const suspendedContributors = (contributors as IUser[])?.filter(
        (user) => user.status === EStatus.SUSPENDED
      );
      setSuspendedUsers(suspendedContributors as IUser[]);
      const activeContributors: IUser[] = (contributors as IUser[])?.filter(
        (user) => user.status !== EStatus.SUSPENDED
      );

      // order data by updatedAt
      (activeContributors as IUser[])?.sort((a: any, b: any) => {
        return (
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        );
      });
      setUsers(activeContributors as IUser[]);
    } catch (error) {
      toast.error((error as IHttpException)?.message);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   if (users?.length !== 0) {
  //     setLoading(true);
  //     users?.forEach((user) => {
  //       if (user?.id) {
  //         getDevotionsByContributor(user.id)
  //           .then((data) => {
  //             setUserDevotions({ user, devotions: data as IDevotion[] });
  //             setLoading(false);
  //           })
  //           .catch((err) => {
  //             toast.error(err);
  //             setLoading(false);
  //           });
  //       }
  //     });
  //   }
  // }, [users]);

  const handleSuspend = async () => {
    setLoading(true);
    if (selectedContributor?.id) {
      const suspendedUser = await suspendContributorService(
        selectedContributor.id
      );
      setUsers([...users, suspendedUser as IUser]);
      setLoading(false);
    }
  };

  if (!users) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {showSuspendConfirmation && (
        <ConfirmPopup
          title="Confirm deletion"
          message="Are you sure you want to suspend this user (contributor)?"
          onCancel={() => setShowSuspendConfirmation(false)}
          onConfirm={handleSuspend}
          loading={isLoading}
        />
      )}
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
        <Tab label="Active">
          {isLoading ? (
            <div className="flex h-screen w-full items-center justify-center">
              <Spinner className="size-5" />
            </div>
          ) : users?.length === 0 ? (
            <NoDataAvailable />
          ) : (
            <TableComponent
              users={users.sort((a, b) => a.status.localeCompare(b.status))}
              showAddSplitScreens={showAddSplitScreens}
              setShowAddSplitScreens={setShowAddSplitScreens}
              setShowEditSplitScreens={setShowEditSplitScreens}
              setShowViewSplitScreens={setShowViewSplitScreens}
              setSelectedContributor={setSelectedContributor}
              setShowSuspendConfirmation={setShowSuspendConfirmation}
            />
          )}
        </Tab>
        <Tab label="Suspended">
          {suspendUsers?.length === 0 ? (
            <NoDataAvailable />
          ) : (
            <TableComponent
              users={suspendUsers}
              showAddSplitScreens={showAddSplitScreens}
              setShowAddSplitScreens={setShowAddSplitScreens}
              setShowEditSplitScreens={setShowEditSplitScreens}
              setShowViewSplitScreens={setShowViewSplitScreens}
              setSelectedContributor={setSelectedContributor}
              setShowSuspendConfirmation={setShowSuspendConfirmation}
            />
          )}
        </Tab>
      </Tabs>
    </>
  );
};

export default ContributorList;
