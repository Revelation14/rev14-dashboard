/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import Button from '@/components/common/Button';
import { InputText } from '@/components/common/InputText';
import { editContributorService } from '@/services/contributor.service';
import type { IEditUser } from '@/types/user.types';

import type { IHttpException } from '../../types/common.types';
import ErrorMessage from '../common/ErrorMessage';
import Spinner from '../common/Spinner';

interface IEditContributor {
  contributor: IEditUser;
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
    contributions: contributor.contributions,
  });
  const [isLoading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await editContributorService(contributor.id, formData);
      if (res.statusCode !== 200 || res.statusCode !== 201) {
        setErrorMsg((res as IHttpException).message);
      }
      window.location.reload();
    } catch (error) {
      console.log(error);
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
            {errorMsg && (
              <ErrorMessage
                errorMessage={errorMsg}
                setErrorMessage={setErrorMsg}
              />
            )}
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
          </div>
        </div>
        <div className="pb-2 pt-8 font-medium text-gray-400">Role</div>
        <div className="rounded-xl bg-gray-50 p-6">
          <div className="flex flex-col gap-6">
            <p className="bg-gray-150">{contributor.role}</p>
          </div>
        </div>
        <div className="mx-auto px-24 pt-9 lg:px-56">
          {isLoading ? (
            <Spinner className="h-5 w-5" />
          ) : (
            <Button
              text="Save"
              type="submit"
              backgroundColor="gray-50"
              color="gray-400"
              className="hover:bg-gray-150"
              width="w-full"
            />
          )}
        </div>
      </form>
    </>
  );
};

export default EditContributor;
