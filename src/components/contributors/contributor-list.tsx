/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import { ActionButton } from '@/components/common/ActionButton';
import Button from '@/components/common/Button';
import Table from '@/components/common/customTable';
import Search from '@/components/common/Search';
import { Tab, Tabs } from '@/components/common/Tabs';
import Tooltip from '@/components/common/Tooltip';

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
  const users = [
    {
      image: '/assets/images/contributor.png',
      name: 'John Doe',
      role: 'Admin',
      contributions: 10,
    },
    {
      image: '/assets/images/contributor.png',
      name: 'Jane Smith',
      role: 'Editor',
      contributions: 5,
    },
    {
      image: '/assets/images/contributor.png',
      name: 'John Doe',
      role: 'Admin',
      contributions: 10,
    },
    {
      image: '/assets/images/contributor.png',
      name: 'Anna Young',
      role: 'Editor',
      contributions: 5,
    },
    {
      image: '/assets/images/contributor.png',
      name: 'Ella Eun',
      role: 'Admin',
      contributions: 7,
    },
    {
      image: '/assets/images/contributor.png',
      name: 'Loraine',
      role: 'Editor',
      contributions: 6,
    },
    {
      image: '/assets/images/contributor.png',
      name: 'John Doe',
      role: 'Admin',
      contributions: 10,
    },
    {
      image: '/assets/images/contributor.png',
      name: 'Jane Smith',
      role: 'Editor',
      contributions: 5,
    },
  ];

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
          data={users.map((user) => [
            <div key={`contributor-${user.name}`} className="mt-10">
              <div className="flex items-center text-lg font-normal">
                <img
                  src={user.image}
                  alt={user.name}
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
                  trigger={<img src="/assets/icons/three-dots.svg" alt="" />}
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
                      action: () => {},
                    },
                  ]}
                />
              </div>
            </div>,
          ])}
        />
      </Tab>
      <Tab label="Suspended">
        <h2 className="text-lg text-green-400">suspended</h2>
      </Tab>
      <Tab label="Closed">
        <h2 className="text-lg font-bold text-yellow-300">closed</h2>
      </Tab>
    </Tabs>
  );
};
export default ContributorList;
