/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import Button from '@/components/common/Button';
import { InputText } from '@/components/common/InputText';
import { addContributorService } from '@/services/contributor.service';
import type { IHttpException } from '@/types/user.types';
import { EGender, EUserRole } from '@/types/user.types';

import ErrorMessage from '../common/ErrorMessage';
import Spinner from '../common/Spinner';

interface IAddContributor {
  setShowAddSplitScreens: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddContributor: React.FC<IAddContributor> = ({
  setShowAddSplitScreens,
}) => {
  const [formData, setFormData] = React.useState<any>({
    name: '',
    email: '',
    phoneNumber: '',
    gender: EGender.MALE,
    password: 'Password@123',
    role: EUserRole.CONTENT_CREATOR,
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await addContributorService(formData);
      if (res.statusCode === 400) {
        setErrorMsg('Contributor already exists');
      } else {
        setErrorMsg((res as IHttpException).message);
      }
    } catch (error) {
      setErrorMsg('Error adding contributor');
    }
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      gender: '',
      password: 'Password@123',
      role: EUserRole.CONTENT_CREATOR,
    });
    setLoading(false);
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <div>Add Contributor</div>
        <div className="flex items-center gap-4">
          <div
            className="cursor-pointer rounded-full bg-gray-50 p-3"
            onClick={() => setShowAddSplitScreens(false)}
          >
            <img src="/assets/icons/black-close.svg" alt="" className="w-2" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 pt-11">
        <form onSubmit={handleSubmit}>
          {errorMsg && (
            <ErrorMessage
              errorMessage={errorMsg}
              setErrorMessage={setErrorMsg}
            />
          )}
          <InputText
            type="text"
            label="Full Names"
            onChange={({ value }) => setFormData({ ...formData, name: value })}
          />
          <InputText
            type="email"
            label="Email"
            onChange={({ value }) => setFormData({ ...formData, email: value })}
          />
          <InputText
            type="number"
            label="Phone Number"
            onChange={({ value }) =>
              setFormData({ ...formData, phoneNumber: value })
            }
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
          <div className="mx-auto pt-9">
            {isLoading ? (
              <Spinner className="h-5 w-5" />
            ) : (
              <Button
                text="Add Contributor"
                type="submit"
                backgroundColor="gray-50"
                color="gray-400"
                className="hover:bg-gray-150"
              />
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default AddContributor;
