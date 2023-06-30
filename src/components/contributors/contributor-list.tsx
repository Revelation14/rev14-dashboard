/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';

import { ActionButton } from '@/components/common/ActionButton';
import Button from '@/components/common/Button';
import Table from '@/components/common/customTable';
import Search from '@/components/common/Search';
import { Tab, Tabs } from '@/components/common/Tabs';
import Tooltip from '@/components/common/Tooltip';
import {
  getContributorService,
  suspendContributorService,
} from '@/services/contributor.service';
import { editUser } from '@/store/oneUser';

import Spinner from '../common/Spinner';

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
  const edit = editUser();
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
          <Table
            className="w-full"
            columns={[
              <span key="contributor" className="text-sm font-light">
                Contributor
              </span>,
              <span key="role" className="text-sm font-light">
                Role
              </span>,
              <span key="contributions" className="text-sm font-light">
                Contributions
              </span>,
              <Search
                key="search"
                className="text-sm font-light"
                onSearch={(query) => {
                  console.log('Search query:', query);
                }}
              />,
            ]}
            data={users.map(
              (user: {
                id: string;
                name: string | null | undefined;
                image: string | undefined;
                role: string | null | undefined;
                contributions: string | null | undefined;
                email: string | null | undefined;
                phoneNumber: string | null | undefined;
              }) => [
                <div key={`contributor-${user.name}`} className="mt-10">
                  <div className="flex items-center text-lg font-normal">
                    <img
                      src={user.image}
                      alt=""
                      className="mr-2 hidden h-12 w-12 rounded-full md:block"
                    />
                    <span
                      className={`text-sm md:text-xl ${
                        showAddSplitScreens ? 'text-ellipsis' : ''
                      }`}
                      style={
                        showAddSplitScreens
                          ? {
                              display: '-webkit-box',
                              WebkitBoxOrient: 'vertical',
                              WebkitLineClamp: 1,
                              overflow: 'hidden',
                            }
                          : {}
                      }
                    >
                      {user.name}
                    </span>
                  </div>
                </div>,
                <div key={`role-${user.name}`} className="mt-10">
                  <div className="h-fit w-fit rounded-3xl bg-purple px-3 text-xs font-light text-white md:text-base">
                    {user.role}
                  </div>
                </div>,
                <div key={`contributions-${user.name}`} className="mt-10">
                  {user.contributions} contributions
                </div>,
                <div
                  key={`actions-${user.name}`}
                  className="mt-10 flex items-center justify-end gap-6"
                >
                  <ActionButton
                    label="View"
                    backgroundColor="bg-gray-300"
                    hoverBackgroundColor="hover:bg-gray-50"
                    color="text-black"
                    handleClick={() => {
                      setShowAddSplitScreens(false);
                      setShowEditSplitScreens(false);
                      setShowViewSplitScreens(true);
                    }}
                  />
                  <div>
                    <Tooltip
                      trigger={
                        <img src="/assets/icons/three-dots.svg" alt="" />
                      }
                      options={[
                        {
                          title: 'Edit',
                          label: (
                            <div className="flex items-center gap-5">
                              <img
                                src="/assets/icons/edit.svg"
                                alt=""
                                className=""
                              />
                              <div>Edit</div>
                            </div>
                          ),
                          action: () => {
                            setShowAddSplitScreens(false);
                            setShowViewSplitScreens(false);
                            setShowEditSplitScreens(true);
                            edit.updateUser(user);
                          },
                        },
                        {
                          title: 'Remove Access',
                          label: (
                            <div className="flex items-center gap-5">
                              <img
                                src="/assets/icons/black-close.svg"
                                alt=""
                                className="w-3"
                              />
                              <div>Remove Access</div>
                            </div>
                          ),
                          action: async () => {
                            setLoading(true);
                            await suspendContributorService(user.id);
                            setLoading(false);
                          },
                        },
                      ]}
                    />
                  </div>
                </div>,
              ]
            )}
          />
        )}
      </Tab>
      <Tab label="Suspended">
        <Table
          className="w-full"
          columns={[
            <span key="contributor" className="text-sm font-light">
              Contributor
            </span>,
            <span key="role" className="text-sm font-light">
              Role
            </span>,
            <span key="contributions" className="text-sm font-light">
              Contributions
            </span>,
            <Search
              key="search"
              className="text-sm font-light"
              onSearch={(query) => {
                console.log('Search query:', query);
              }}
            />,
          ]}
          data={users
            .filter((user: { status: string }) => user.status === 'SUSPENDED')
            .map(
              (user: {
                id: string;
                name: string | null | undefined;
                image: string | undefined;
                role: string | null | undefined;
                contributions: string | null | undefined;
                email: string | null | undefined;
                phoneNumber: string | null | undefined;
              }) => [
                <div key={`contributor-${user.name}`} className="mt-10">
                  <div className="flex items-center text-lg font-normal">
                    <img
                      src={user.image}
                      alt=""
                      className="mr-2 hidden h-12 w-12 rounded-full md:block"
                    />
                    <span
                      className={`text-sm md:text-xl ${
                        showAddSplitScreens ? 'text-ellipsis' : ''
                      }`}
                      style={
                        showAddSplitScreens
                          ? {
                              display: '-webkit-box',
                              WebkitBoxOrient: 'vertical',
                              WebkitLineClamp: 1,
                              overflow: 'hidden',
                            }
                          : {}
                      }
                    >
                      {user.name}
                    </span>
                  </div>
                </div>,
                <div key={`role-${user.name}`} className="mt-10">
                  <div className="h-fit w-fit rounded-3xl bg-purple px-3 text-xs font-light text-white md:text-base">
                    {user.role}
                  </div>
                </div>,
                <div key={`contributions-${user.name}`} className="mt-10">
                  {user.contributions} contributions
                </div>,
                <div
                  key={`actions-${user.name}`}
                  className="mt-10 flex items-center justify-end gap-6"
                >
                  <ActionButton
                    label="View"
                    backgroundColor="bg-gray-300"
                    hoverBackgroundColor="hover:bg-gray-50"
                    color="text-black"
                    handleClick={() => {
                      setShowAddSplitScreens(false);
                      setShowEditSplitScreens(false);
                      setShowViewSplitScreens(true);
                    }}
                  />
                  <div>
                    <Tooltip
                      trigger={
                        <img src="/assets/icons/three-dots.svg" alt="" />
                      }
                      options={[
                        {
                          title: 'Edit',
                          label: (
                            <div className="flex items-center gap-5">
                              <img
                                src="/assets/icons/edit.svg"
                                alt=""
                                className=""
                              />
                              <div>Edit</div>
                            </div>
                          ),
                          action: () => {
                            setShowAddSplitScreens(false);
                            setShowViewSplitScreens(false);
                            setShowEditSplitScreens(true);
                            edit.updateUser(user);
                          },
                        },
                        {
                          title: 'Remove Access',
                          label: (
                            <div className="flex items-center gap-5">
                              <img
                                src="/assets/icons/black-close.svg"
                                alt=""
                                className="w-3"
                              />
                              <div>Remove Access</div>
                            </div>
                          ),
                          action: () => {
                            suspendContributorService(user.id);
                          },
                        },
                      ]}
                    />
                  </div>
                </div>,
              ]
            )}
        />
      </Tab>
    </Tabs>
  );
};

export default ContributorList;
