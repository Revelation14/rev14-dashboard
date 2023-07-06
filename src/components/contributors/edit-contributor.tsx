/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

import Button from '@/components/common/Button';
import { InputText } from '@/components/common/InputText';
import { editContributorService } from '@/services/contributor.service';
import type { IUser } from '@/types/user.types';

import type { IHttpException } from '../../types/common.types';

interface IEditContributor {
  contributor: IUser;
  setShowEditSplitScreens: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditContributor: React.FC<IEditContributor> = ({
  contributor,
  setShowEditSplitScreens,
}) => {
  const [formData, setFormData] = useState<any>({
    name: contributor.name,
    email: contributor.email,
    role: contributor.role,
    gender: contributor.gender,
  });
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await editContributorService(
        contributor.id as string,
        formData
      );

      if ((res as IUser)?.id) {
        toast.success('Contributor updated successfully');
        setShowEditSplitScreens(false);
      } else {
        toast.error((res as IHttpException).message);
      }
    } catch (error) {
      toast.error('Error updating contributor');
    }
    setLoading(false);
  };

  return (
    <>
      {/* top */}

      <div className="flex items-center justify-between">
        <div className="text-lg font-medium">Edit Contributor</div>
        <div className="flex items-center gap-4">
          <div
            className="cursor-pointer rounded-full bg-gray-50 p-3"
            onClick={() => setShowEditSplitScreens(false)}
          >
            <img src="/assets/icons/black-close.svg" alt="" className="w-2" />
          </div>
        </div>
      </div>
      {/* end of top */}
      <div className="flex flex-col items-center justify-center pt-11">
        <div className="mb-8 h-20 w-20 rounded-full bg-backgroundAccent pt-3 text-center text-4xl text-white">
          {contributor.name?.charAt(0)}
          {contributor.name?.charAt(1)}
        </div>
      </div>
      <div className="pb-2 font-medium text-gray-400">Personal details</div>
      <form onSubmit={handleSubmit}>
        <div className="rounded-xl bg-gray-50 p-6">
          <div className="flex flex-col gap-6">
            <InputText
              label="Name"
              background="bg-gray-150"
              onChange={({ value }) =>
                setFormData({ ...formData, name: value })
              }
              defaultValue={contributor.name || ''}
            />
            <InputText
              label="email"
              background="bg-gray-150"
              onChange={({ value }) =>
                setFormData({ ...formData, email: value })
              }
              defaultValue={contributor.email || ''}
            />
            <InputText
              label="Phone Number"
              background="bg-gray-150"
              defaultValue={contributor.phoneNumber || ''}
            />
            <div className="flex flex-row gap-6 pt-11">
              <span>Male</span>
              <input
                type="radio"
                value="male"
                id="male"
                checked={formData.gender === 'male'}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              />
              <span>Female</span>

              <input
                type="radio"
                value="female"
                id="female"
                checked={formData.gender === 'female'}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        <div className="pb-2 pt-8 font-medium text-gray-400">Role</div>
        <div className="rounded-xl bg-gray-50 p-6">
          <div className="flex flex-col gap-6">
            <p className="bg-gray-150">
              {contributor.role?.replaceAll('_', ' ')}
            </p>
          </div>
        </div>
        <div className="mx-auto px-24 pt-9 lg:px-56">
          <Button
            text="Save"
            type="submit"
            backgroundColor="gray-50"
            color="gray-400"
            className="hover:bg-gray-150"
            width="w-full"
            loading={isLoading}
          />
        </div>
      </form>
    </>
  );
};

export default EditContributor;
