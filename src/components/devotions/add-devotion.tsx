/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import { ActionButton } from '@/components/common/ActionButton';
import DraftEditor from '@/components/common/Editor';
import { InputFile } from '@/components/common/InputFile';
import { InputText } from '@/components/common/InputText';
import { uploadMultipleFiles, uploadSingleFile } from '@/lib/file-upload';
import { getFromLocalStorage } from '@/lib/helper';
import {
  addDevotion,
  getDevotions,
  updateDevotion,
} from '@/services/devotion.service';
import { useDevotion } from '@/store/devotion.store';
import type { IHttpException } from '@/types/common.types';
import {
  EDevotionStatus,
  type IDevotion,
  type INewDevotion,
} from '@/types/devotion.types';
import type { IUser } from '@/types/user.types';

import ErrorMessage from '../common/ErrorMessage';
import { InputSelect } from '../common/InputSelect';

interface IAddDevotion {
  setShowAddSplitScreens: Dispatch<SetStateAction<boolean>>;
  setDevotions: Dispatch<SetStateAction<IDevotion[]>>;
  defaultValues?: IDevotion;
}

const AddDevotion: React.FC<IAddDevotion> = ({
  setShowAddSplitScreens,
  setDevotions,
  defaultValues,
}) => {
  const [uploadedImage, setUploadedImage] = useState<File>();
  const [uploadedAudio, setUploadedAudio] = useState<File[]>();
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const user = getFromLocalStorage('user');
  const [newDevotion, setNewDevotion] = useState<INewDevotion>({
    attachments: [],
    coverImage: '',
    title: '',
    content: '',
    status: EDevotionStatus.DRAFT,
    createdBy: '',
  });

  // useEffect(() => {
  //   if (defaultValues?.coverImage) {
  //     setUploadedImage(defaultValues.coverImage);
  //   }
  //   if (defaultValues?.attachments) {
  //     setUploadedAudio(defaultValues.attachments);
  //   }
  // }, [defaultValues]);

  useEffect(() => {
    if (defaultValues) {
      const defaultDevotion = newDevotion;
      // eslint-disable-next-line no-restricted-syntax
      for (const key in defaultValues) {
        if (
          // eslint-disable-next-line no-prototype-builtins
          defaultValues.hasOwnProperty(key) &&
          // eslint-disable-next-line no-prototype-builtins
          defaultDevotion.hasOwnProperty(key)
        ) {
          // @ts-ignore
          defaultDevotion[key] = defaultValues[key];
        }
      }
      setNewDevotion(defaultDevotion);
    }
  }, [defaultValues]);

  const devotionStore = useDevotion();
  const handleSubmit = async () => {
    setLoading(true);

    let newAttachments: string[] = newDevotion.attachments;
    let coverPhoto = newDevotion.coverImage;

    if (uploadedAudio) {
      newAttachments = await uploadMultipleFiles(uploadedAudio, 'audio');
    } else if (uploadedImage) {
      coverPhoto = await uploadSingleFile(uploadedImage);
    }

    const handleSuccess = () => {
      toast.success('Devotion updated successfully!');
      getDevotions()
        .then((data) => {
          setDevotions(data as IDevotion[]);
        })
        .catch((err) => {
          toast.error((err as IHttpException).message);
        });
      setShowAddSplitScreens(false);
    };

    const handleError = (err: IHttpException) => {
      toast.error(err.message);
    };

    if (defaultValues) {
      updateDevotion(
        {
          ...newDevotion,
          coverImage: coverPhoto,
          attachments: [...newAttachments, ...defaultValues.attachments],
          createdBy: defaultValues?.createdBy ?? (user as IUser)?.id ?? '',
        },
        defaultValues.id
      )
        .then(() => {
          handleSuccess();
        })
        .catch((err) => {
          handleError(err as IHttpException);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      addDevotion({
        ...newDevotion,
        coverImage: coverPhoto,
        attachments: newAttachments,
        createdBy: (user as IUser)?.id ?? '',
      })
        .then((res) => {
          if ((res as IDevotion)?.id) {
            handleSuccess();
            devotionStore.setDevotion(res as IDevotion);
          } else {
            handleError(res as IHttpException);
          }
        })
        .catch((err) => {
          handleError(err as IHttpException);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

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
            handleClick={handleSubmit}
            loading={loading}
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
        {errorMsg && (
          <div className="mt-4">
            <ErrorMessage
              errorMessage={errorMsg}
              setErrorMessage={setErrorMsg}
            />
          </div>
        )}
        {defaultValues && (
          <div className="flex flex-col gap-2 pt-11">
            <InputSelect
              roundedStyle="rounded-md"
              label="Status"
              background="bg-gray-50"
              options={[
                { label: 'Publish', value: 'publish' },
                { label: 'Reject', value: 'reject' },
              ]}
              defaultValue={
                defaultValues?.status === EDevotionStatus.DELETED
                  ? 'reject'
                  : defaultValues?.status === EDevotionStatus.PUBLISHED
                  ? 'publish'
                  : undefined
              }
              onChange={(value) =>
                setNewDevotion({
                  ...newDevotion,
                  status:
                    value === 'reject'
                      ? EDevotionStatus.DELETED
                      : EDevotionStatus.PUBLISHED,
                })
              }
            />
          </div>
        )}
        <div className={defaultValues ? '' : 'pt-11'}>
          <InputFile
            label="The devotional’s image goes here"
            title="Upload the devotional’s Image"
            file={uploadedImage}
            setFile={setUploadedImage}
            accepted="image/*"
          />
        </div>
        <InputText
          label="Title"
          defaultValue={defaultValues?.title}
          onChange={({ value }) =>
            setNewDevotion({ ...newDevotion, title: value })
          }
        />
        <div className="flex flex-col gap-2">
          <div className="font-medium text-gray-600">Content here</div>
          <DraftEditor
            handleEditorChange={(value) =>
              setNewDevotion({ ...newDevotion, content: value })
            }
            defaultValue={defaultValues?.content}
          />
        </div>
        <InputFile
          label="Audio goes here"
          title="Upload the devotional’s Audio"
          file={uploadedAudio}
          setFile={setUploadedAudio}
          accepted="audio/*"
          multiple
        />
      </div>
    </>
  );
};
export default AddDevotion;
