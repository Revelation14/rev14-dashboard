/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import Button from '@/components/common/Button';
import { InputText } from '@/components/common/InputText';
import { TextArea } from '@/components/common/TextArea';

interface IAddContributor {
  setShowAddSplitScreens: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddContributor: React.FC<IAddContributor> = ({
  setShowAddSplitScreens,
}) => {
  const [, setMessage] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const handleMessageChange = (event: { value: any }) => {
    const inputValue = event.value;
    const inputLength = inputValue.length;
    if (inputLength <= 1200) {
      setMessage(inputValue);
      setCharacterCount(inputLength);
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
        <InputText type="email" label="Email" />
        <TextArea
          placeholder="Your messsage"
          label="Message"
          onChange={handleMessageChange}
        />

        <div className="text-sm font-normal text-gray-700">
          {characterCount}/1200
        </div>
        <div className="mx-auto pt-9">
          <Button
            text="Add Contributor"
            backgroundColor="gray-50"
            color="gray-400"
            className="hover:bg-gray-150"
          />
        </div>
      </div>
    </>
  );
};

export default AddContributor;
