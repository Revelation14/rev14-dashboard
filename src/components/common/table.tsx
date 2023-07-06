/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { Dispatch, FC, SetStateAction } from 'react';

import Tooltip from '@/components/common/Tooltip';
import { toTitleCase } from '@/lib/helper';
import type { IUser } from '@/types/user.types';

import { editUser } from '../../store/oneUser';
import { ActionButton } from './ActionButton';
import Table from './customTable';
import Search from './Search';

export interface IContributorTable {
  users: IUser[];
  showAddSplitScreens: boolean;
  setShowAddSplitScreens: Dispatch<SetStateAction<boolean>>;
  setShowViewSplitScreens: Dispatch<SetStateAction<boolean>>;
  setShowEditSplitScreens: Dispatch<SetStateAction<boolean>>;
  setSelectedContributor: Dispatch<SetStateAction<IUser | undefined>>;
  setShowSuspendConfirmation: Dispatch<SetStateAction<boolean>>;
}

const TableComponent: FC<IContributorTable> = ({
  users,
  showAddSplitScreens,
  setShowAddSplitScreens,
  setShowEditSplitScreens,
  setShowViewSplitScreens,
  setSelectedContributor,
  setShowSuspendConfirmation,
}) => {
  const edit = editUser();

  return (
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
          onClearSearch={() => {}}
        />,
      ]}
      data={users.map((user: IUser) => [
        <div key={`contributor-${user.name}`} className="mt-10">
          <div className="flex items-center text-lg font-normal">
            {/* <img
                src={user.image}
                alt=""
                className="mr-2 hidden h-12 w-12 rounded-full md:block"
              /> */}
            <div className="mr-2 hidden h-8 w-8 items-center justify-center rounded-full bg-backgroundAccent p-2 text-sm text-white md:flex">
              {user.name?.charAt(0)}
            </div>
            <span
              className={`text-sm ${
                showAddSplitScreens ? 'text-xs' : `md:text-base`
              } ${showAddSplitScreens ? 'text-ellipsis' : ''}`}
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
          <div
            className={`h-fit w-fit rounded-3xl bg-purple px-3 text-xs font-light text-white ${
              showAddSplitScreens ? 'text-xs' : 'md:text-sm'
            }`}
          >
            {toTitleCase(user.role?.replaceAll('_', ' ') ?? '')}
          </div>
        </div>,
        <div
          key={`contributions-${user.name}`}
          className={`mt-10 cursor-pointer ${
            showAddSplitScreens ? 'text-xs' : 'text-sm'
          }`}
          onClick={() => {
            setShowAddSplitScreens(false);
            setShowEditSplitScreens(false);
            setShowViewSplitScreens(true);
            setSelectedContributor(user);
          }}
        >
          {user.contributions === 1
            ? '1 contribution'
            : `${user.contributions} contributions`}
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
              setSelectedContributor(user);
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
                      <img src="/assets/icons/edit.svg" alt="" className="" />
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
                    setShowSuspendConfirmation(true);
                    setSelectedContributor(user);
                  },
                },
              ]}
            />
          </div>
        </div>,
      ])}
    />
  );
};

export default TableComponent;
