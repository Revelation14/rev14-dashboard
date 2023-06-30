/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import Button from '@/components/common/Button';
import { InputText } from '@/components/common/InputText';
import { AddContributorService } from '@/services/contributor.service';
import { EGender, EUserRole } from '@/types/user.types';

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
    password: 'Test@123',
    role: EUserRole.CONTENT_CREATOR,
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await AddContributorService(formData);
      console.log(data.statusCode);
      if (data.statusCode === 400) {
        alert('Contributor already exists');
      } else {
        alert('Contributor added successfully');
      }
    } catch (error) {
      alert('Error adding contributor');
    }
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
          <input type="radio" name="gender" value="Male" />
          Male
          <input type="radio" name="gender" value="Female" />
          Female
          <div className="mx-auto pt-9">
            <Button
              text="Add Contributor"
              type="submit"
              backgroundColor="gray-50"
              color="gray-400"
              className="hover:bg-gray-150"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddContributor;
