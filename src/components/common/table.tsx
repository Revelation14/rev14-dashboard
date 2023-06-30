import Tooltip from '@/components/common/Tooltip';

import { suspendContributorService } from '../../services/contributor.service';
import { editUser } from '../../store/oneUser';
import { ActionButton } from './ActionButton';
import Table from './customTable';
import Search from './Search';

export interface IContributorTable {
  users?: any;
  showAddSplitScreens: boolean;
  setShowAddSplitScreens: React.Dispatch<React.SetStateAction<boolean>>;
  setShowViewSplitScreens: React.Dispatch<React.SetStateAction<boolean>>;
  setShowEditSplitScreens: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const TableComponent: React.FC<IContributorTable> = ({
  users,
  showAddSplitScreens,
  setShowAddSplitScreens,
  setShowEditSplitScreens,
  setShowViewSplitScreens,
  setLoading,
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
  );
};

export default TableComponent;
