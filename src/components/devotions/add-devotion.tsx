/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';

import { ActionButton } from '@/components/common/ActionButton';
import DraftEditor from '@/components/common/Editor';
import { InputFile } from '@/components/common/InputFile';
import { InputText } from '@/components/common/InputText';

interface IAddDevotion {
  setShowAddSplitScreens: React.Dispatch<React.SetStateAction<boolean>>;
  defaultValues?: {
    title: string;
    devotion: string;
    uploadedImage?: File;
    uploadedAudio?: File;
  };
}

const AddDevotion: React.FC<IAddDevotion> = ({
  setShowAddSplitScreens,
  defaultValues,
}) => {
  const [uploadedImage, setUploadedImage] = useState<File>();
  const [uploadedAudio, setUploadedAudio] = useState<File>();

  useEffect(() => {
    if (defaultValues?.uploadedImage) {
      setUploadedImage(defaultValues.uploadedImage);
    }
    if (defaultValues?.uploadedAudio) {
      setUploadedAudio(defaultValues.uploadedAudio);
    }
  }, [defaultValues]);

  return (
    <>
      <div className="flex items-center justify-between">
        <div>{defaultValues ? 'Edit Devotion' : 'Add Devotional'}</div>
        <div className="flex items-center gap-4">
          <ActionButton
            backgroundColor="bg-gray-50"
            hoverBackgroundColor="hover:bg-gray-100"
            color="text-gray-400"
            label="Save"
          />
          <div
            className="cursor-pointer rounded-full bg-gray-50 p-3"
            onClick={() => setShowAddSplitScreens(false)}
          >
            <img src="/assets/icons/black-close.svg" alt="" className="w-2" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="pt-11">
          <InputFile
            label="The devotional’s image goes here"
            title="Upload the devotional’s Image"
            file={uploadedImage}
            setFile={setUploadedImage}
          />
        </div>
        <InputText label="Title" defaultValue={defaultValues?.title} />
        <div className="flex flex-col gap-2">
          <div className="font-medium text-gray-600">Content here</div>
          <DraftEditor
            handleEditorChange={() => {}}
            defaultValue={defaultValues?.devotion}
          />
        </div>
        <InputFile
          label="Audio goes here"
          title="Upload the devotional’s Audio"
          file={uploadedAudio}
          setFile={setUploadedAudio}
        />
      </div>
    </>
  );
};
export default AddDevotion;
