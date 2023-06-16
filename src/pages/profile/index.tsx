/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';

import Button from '@/components/common/Button';

const Profile = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
  });
  const [profileInitials, setProfileInitials] = useState('');

  useEffect(() => {
    // Replace this with your actual backend API call
    const fetchUserData = async () => {
      try {
        const dummyUserData = {
          firstName: 'Igwaneza',
          middleName: 'Knowbee',
          lastName: 'Bruce',
        };
        setUserData(dummyUserData);

        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        generateProfileInitials(
          dummyUserData.firstName,
          dummyUserData.lastName
        );
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const generateProfileInitials = (firstName: string, lastName: string) => {
    const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;
    setProfileInitials(initials);
  };
  const handleExit = () => {
    window.history.back(); // Navigate to the previous page
  };

  return (
    <div className="m-5 flex h-full flex-col items-center rounded-2xl border border-gray-200 bg-white p-6">
      <button
        type="button"
        className="fixed right-8 top-8 z-10 gap-2.5 rounded-full bg-gray-150 p-2.5"
        onClick={handleExit}
      >
        <img src="/assets/icons/cancel.svg" alt="" />
      </button>
      <div className="flex flex-col items-center gap-12">
        <div className="h-[80px] w-[80px] rounded-full bg-[#276EF1] text-center text-4xl font-medium text-white">
          <div className="-right-0 top-0 h-[28px] w-[28px] rounded-full bg-gray-150 p-2">
            <img
              src="/assets/icons/profile-edit.svg"
              alt=""
              className="h-full w-full"
            />
          </div>

          {profileInitials}
        </div>
        <div className="flex flex-col items-start gap-4 self-stretch">
          <h1 className="text-base font-medium text-gray-400">
            Personal Details
          </h1>
          <div className="flex flex-col items-start gap-6 rounded-3xl bg-gray-50 p-6">
            <label htmlFor="firstName" className="text-sm font-medium">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              value={userData.firstName}
              className="h-[36px] w-[432px] self-stretch rounded-lg bg-gray-150 p-2 text-sm font-medium text-black"
            />
            <label htmlFor="middleName" className="text-sm font-medium">
              Middle Name
            </label>
            <input
              id="middleName"
              type="text"
              value={userData.middleName}
              className="h-[36px] w-[432px] self-stretch rounded-lg bg-gray-150 p-2 text-sm font-medium text-black"
            />
            <label htmlFor="lastName" className="text-sm font-medium">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              value={userData.lastName}
              className="h-[36px] w-[432px] self-stretch rounded-lg bg-gray-150 p-2 text-sm font-medium text-black"
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 self-stretch">
          <h1 className="text-base font-medium text-gray-400">Security</h1>
          <div className="flex flex-col items-start gap-6 rounded-3xl bg-gray-50 p-6">
            <label htmlFor="password" className="text-sm font-medium">
              Current Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password.."
              className="h-[36px] w-[432px] self-stretch rounded-lg bg-gray-150 p-2 text-sm font-medium text-black"
            />
            <label htmlFor="newPassword" className="text-sm font-medium">
              New Password
            </label>
            <input
              id="newPassword"
              type="password"
              placeholder="Create a password.."
              className="h-[36px] w-[432px] self-stretch rounded-lg bg-gray-150 p-2 text-sm font-medium text-black"
            />
            <label htmlFor="confirmPassword" className="text-sm font-medium">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Create a password.."
              className="h-[36px] w-[432px] self-stretch rounded-lg bg-gray-150 p-2 text-sm font-medium text-black"
            />
          </div>
        </div>
        <Button
          type="submit"
          text="Save"
          className="h-fit w-fit bg-gray-50 p-1 text-sm font-normal text-gray-400"
          color="#FFFFFF"
        />
      </div>
    </div>
  );
};

export default Profile;
