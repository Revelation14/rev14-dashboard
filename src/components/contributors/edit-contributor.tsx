/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import Button from '@/components/common/Button';
import { InputSelect } from '@/components/common/InputSelect';
import { InputText } from '@/components/common/InputText';

interface IEditContributor {
  contributor: {
    firstName: string;
    lastName: string;
    type: 'Submitter' | 'Reviewer';
  };
  setShowEditSplitScreens: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditContributor: React.FC<IEditContributor> = ({
  contributor,
  setShowEditSplitScreens,
}) => {
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
          {contributor.firstName.charAt(0)}
          {contributor.lastName.charAt(0)}
        </div>
      </div>
      <div className="pb-2 font-medium text-gray-400">Personal details</div>
      <div className="bg-gray-50 p-6">
        <div className="flex flex-col gap-6">
          <InputText label="First Name" background="bg-gray-150" />
          <InputText label="Middle Name" background="bg-gray-150" />
          <InputText label="Last Name" background="bg-gray-150" />
        </div>
      </div>
      <div className="pb-2 pt-8 font-medium text-gray-400">Account</div>
      <div className="bg-gray-50 p-6">
        <div className="flex flex-col gap-6">
          <InputSelect
            label="Role"
            background="bg-gray-150"
            options={[
              { label: 'Submitter', value: 'Submitter' },
              { label: 'Reviewer', value: 'Reviewer' },
            ]}
          />
        </div>
      </div>
      <div className="mx-auto px-24 pt-9 lg:px-56">
        <Button
          text="Save"
          backgroundColor="gray-50"
          color="gray-400"
          className="hover:bg-gray-150"
          width="w-full"
        />
      </div>
    </>
  );
};

export default EditContributor;
