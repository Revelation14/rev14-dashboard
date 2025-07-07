'use client';

/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import 'react-datetime/css/react-datetime.css';

import type { Moment } from 'moment';
import moment from 'moment';
import type { Dispatch, KeyboardEvent, SetStateAction } from 'react';
import { useEffect, useState } from 'react';
import Datetime from 'react-datetime';
import { toast } from 'react-hot-toast';

import { ActionButton } from '@/components/common/ActionButton';
import DraftEditor from '@/components/common/Editor';
import { InputFile } from '@/components/common/InputFile';
import { InputText } from '@/components/common/InputText';
import { uploadMultipleFiles, uploadSingleFile } from '@/lib/file-upload';
import { getFromLocalStorage } from '@/lib/helper';
import {
  addDevotion,
  getBibleBooks,
  getBiblePassage,
  getBibleVersions,
  getDevotions,
  updateDevotion,
} from '@/services/devotion.service';
import { useDevotion } from '@/store/devotion.store';
import type { IHttpException } from '@/types/common.types';
import type {
  IBibleBookResponse,
  IBiblePassageResponse,
  IBibleResponse,
  IDevotion,
  IDevotionCategory,
  INewDevotion,
} from '@/types/devotion.types';
import { EDevotionStatus } from '@/types/devotion.types';
import type { IUser } from '@/types/user.types';
import { EUserRole } from '@/types/user.types';

import ErrorMessage from '../common/ErrorMessage';
import { InputSelect } from '../common/InputSelect';

interface IAddDevotion {
  setShowAddSplitScreens: Dispatch<SetStateAction<boolean>>;
  setDevotions: Dispatch<SetStateAction<IDevotion[]>>;
  setAllDevotions: Dispatch<SetStateAction<IDevotion[]>>;
  defaultValues?: IDevotion;
  categories: IDevotionCategory[];
}

const AddDevotion: React.FC<IAddDevotion> = ({
  setShowAddSplitScreens,
  setDevotions,
  categories,
  setAllDevotions,
  defaultValues,
}) => {
  const [uploadedImage, setUploadedImage] = useState<File>();
  const [uploadedAudio, setUploadedAudio] = useState<File>();
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetchingVerse, setFetchingVerse] = useState(false);
  const [bibles, setBibles] = useState<{
    versions: { label: string; value: string }[];
    versionsLoading: boolean;
    books: { label: string; value: string }[];
    booksLoading: boolean;
  }>({
    versions: [],
    versionsLoading: false,
    books: [],
    booksLoading: false,
  });
  const [titleIsEmpty, setTitleIsEmpty] = useState(false);
  const [verseIsEmpty, setVerseIsEmpty] = useState(false);
  const [speakerIsEmpty, setSpeakerIsEmpty] = useState(false);
  const [audioIsEmpty, setAudioIsEmpty] = useState(false);
  const [coverImageIsEmpty, setCoverImageIsEmpty] = useState(false);
  const [bibleVersion, setBibleVersion] = useState<string>();
  const [bibleBook, setBibleBook] = useState<string>();
  const user = JSON.parse(getFromLocalStorage('user'));

  const [startTime, setStartTime] = useState(
    new Date(new Date().setDate(new Date().getDate() + 1))
  );
  const [releaseDate, setReleaseDate] = useState(startTime.toISOString());
  const [newDevotion, setNewDevotion] = useState<INewDevotion>({
    attachments: [],
    timestamp: '',
    coverImage: '',
    title: '',
    verse: '',
    speaker: '',
    content: '',
    category: '',
    releaseDate: new Date().toISOString(),
    status: EDevotionStatus.DRAFT,
    createdBy: '',
  });

  const handleChange = (e: Moment | string) => {
    const date = new Date(e.toString());
    // Ensure valid date before converting
    if (!Number.isNaN(date.getTime())) {
      setStartTime(new Date(moment(e.toString()).utc().toISOString()));
      setReleaseDate(moment(e.toString()).utc().toISOString());
    }
  };

  useEffect(() => {
    setBibles((prev) => ({
      ...prev,
      versions: [],
      versionsLoading: true,
    }));

    // fetch bible versions on component mount
    getBibleVersions()
      .then((data) => {
        setBibles((prev) => ({
          ...prev,
          versions: (data as IBibleResponse[]).map((version) => ({
            label: `${version.nameLocal}${
              version.description ? ` (${version.description})` : ''
            }`,
            value: version.id,
          })),
          versionsLoading: false,
        }));
      })
      .catch((err) => {
        setBibles((prev) => ({
          ...prev,
          versionsLoading: false,
        }));
        toast.error((err as IHttpException).message);
      });
  }, []);

  useEffect(() => {
    setBibles((prev) => ({
      ...prev,
      books: [],
      booksLoading: true,
    }));
    if (bibleVersion) {
      getBibleBooks(bibleVersion).then((data) => {
        setBibles((prev) => ({
          ...prev,
          books: (data as unknown as IBibleBookResponse[]).map((bk) => ({
            label: bk.name,
            value: bk.id,
          })),
          booksLoading: false,
        }));
      });
    }
  }, [bibleVersion]);

  useEffect(() => {
    if (bibleBook && bibleVersion) {
      setNewDevotion((prev) => ({
        ...prev,
        verse: bibleBook,
      }));
    }
  }, [bibleBook]);

  useEffect(() => {
    if (defaultValues?.releaseDate) {
      const date = new Date(defaultValues.releaseDate);
      if (!Number.isNaN(date.getTime())) {
        setStartTime(date);
        setReleaseDate(date.toISOString());
      }
    }
    if (defaultValues?.coverImage) {
      setUploadedImage(defaultValues.coverImage as unknown as File);
    }
    if (defaultValues?.attachments) {
      setUploadedAudio(defaultValues.attachments[0] as unknown as File);
    }
  }, [defaultValues]);

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

  const handleSuccess = (message = 'Devotion updated successfully!') => {
    toast.success(message);
    getDevotions()
      .then((data) => {
        setDevotions(data as IDevotion[]);
        setAllDevotions(data as IDevotion[]);
      })
      .catch((err) => {
        toast.error((err as IHttpException).message);
      });
    setShowAddSplitScreens(false);
  };

  const handleError = (err: IHttpException) => {
    toast.error(err.message);
  };

  const validateForm = () => {
    if (!newDevotion.title) {
      setTitleIsEmpty(true);
    } else {
      setTitleIsEmpty(false);
    }
    if (!newDevotion.verse) {
      setVerseIsEmpty(true);
    } else {
      setVerseIsEmpty(false);
    }
    if (!newDevotion.speaker) {
      setSpeakerIsEmpty(true);
    } else {
      setSpeakerIsEmpty(false);
    }
    if (uploadedImage) {
      setCoverImageIsEmpty(true);
    } else {
      setCoverImageIsEmpty(false);
    }
    if (uploadedAudio) {
      setAudioIsEmpty(true);
    } else {
      setAudioIsEmpty(false);
    }
    // check form validity
    if (
      !newDevotion.title ||
      !newDevotion.verse ||
      !newDevotion.speaker ||
      !uploadedImage ||
      !uploadedAudio ||
      !newDevotion.content
    ) {
      setErrorMsg('Please fill in all the required fields');
      toast.error('Please fill in all the required fields');
      setLoading(false);
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    setLoading(true);
    let newAttachments = newDevotion.attachments;
    let coverPhoto = newDevotion.coverImage;
    let newTimestamp = newDevotion.timestamp;
    const formIsValid = validateForm();
    if (!formIsValid) return;
    if (uploadedAudio) {
      const uploadedAudioRes = await uploadMultipleFiles(
        [uploadedAudio],
        'audio'
      );
      if (uploadedAudioRes) {
        newAttachments = [uploadedAudioRes.secure_url];
        newTimestamp = uploadedAudioRes.duration.toString();
      }
    }
    if (uploadedImage) {
      coverPhoto = await uploadSingleFile(uploadedImage);
    }
    if (defaultValues) {
      if (
        newDevotion.status === EDevotionStatus.PUBLISHED &&
        (coverPhoto === '' || newAttachments === undefined)
      ) {
        toast.error(
          `A devotion can't be published if it doesn't have a cover image or an audio!`,
          {
            className: 'ml-0 lg:ml-[35rem]',
          }
        );
        setLoading(false);
      } else {
        updateDevotion(
          {
            ...newDevotion,
            coverImage: coverPhoto,
            attachments: newAttachments,
            timestamp: newTimestamp,
            createdBy: defaultValues?.createdBy ?? (user as IUser)?.id ?? '',
            releaseDate,
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
      }
    } else {
      setNewDevotion({
        ...newDevotion,
        coverImage: coverPhoto,
      });
      addDevotion({
        ...newDevotion,
        releaseDate, // Use releaseDate directly
        coverImage: coverPhoto,
        attachments: newAttachments,
        timestamp: newTimestamp,
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

  const removeAudio = (audio: string) => {
    const newAttachments = newDevotion.attachments.filter(
      (attachment) => attachment !== audio
    );
    setNewDevotion({ ...newDevotion, attachments: newAttachments });
  };

  useEffect(() => {
    if (defaultValues?.content) {
      setNewDevotion({
        ...newDevotion,
        content: defaultValues.content,
      });
    }
  }, [defaultValues]);

  return (
    <>
      <div className="flex items-center justify-between font-raleway">
        <div>{defaultValues ? 'Edit Devotion' : 'Add Devotional'}</div>

        <div className="flex items-center gap-4">
          <ActionButton
            backgroundColor="bg-gold"
            hoverBackgroundColor="hover:bg-gold/75"
            color="text-white"
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
        {defaultValues && user.role === EUserRole.SYSTEM_ADMIN && (
          <div className="flex flex-col gap-2 pt-11">
            <InputSelect
              roundedStyle="rounded-md"
              label="Status"
              background="bg-gray-50"
              options={[
                { label: 'Draft', value: EDevotionStatus.DRAFT },
                { label: 'Published', value: EDevotionStatus.PUBLISHED },
                { label: 'Rejected', value: EDevotionStatus.DELETED },
              ]}
              defaultValue={newDevotion?.status}
              onChange={(value) => {
                setNewDevotion({
                  ...newDevotion,
                  status: value as EDevotionStatus,
                });
              }}
            />
          </div>
        )}

        <div
          className={
            defaultValues && user.role === EUserRole.SYSTEM_ADMIN ? '' : 'pt-11'
          }
        >
          {newDevotion.coverImage && (
            <div className="flex items-center gap-2 pb-5">
              <span className="text-sm font-semibold">
                Previous cover image {'>'}
              </span>
              <div className="relative">
                <img
                  src={newDevotion.coverImage}
                  alt="previous cover pic"
                  width={120}
                  height={120}
                />
                <div
                  className="absolute right-1 top-1 cursor-pointer rounded-full bg-white p-1 hover:bg-gray-200"
                  onClick={() => {
                    setNewDevotion({ ...newDevotion, coverImage: '' });
                  }}
                >
                  <img
                    src="/assets/icons/black-close.svg"
                    alt="close"
                    className="w-2"
                  />
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-col gap-2 pb-4">
            <h2>Release Date:</h2>
            <Datetime
              onChange={handleChange}
              value={startTime}
              dateFormat="DD-MM-yyyy"
              timeFormat
              className="bg-gray-50 p-2 text-base"
            />
            <div className="text-xs">
              The date format used is {`"`}DD-MM-yyyy{`"`}, which represents the
              day, month, and year.
              <br />
              The time format used is {`"`}HH:MM XM{`"`}, which represents the
              12-hour clock system showing hour, minutes and (AM or PM)
            </div>
          </div>
          <InputFile
            label="The devotional's image goes here"
            title="Upload the devotional's Image"
            file={uploadedImage}
            setFile={setUploadedImage}
            accepted="image/*"
            hasError={coverImageIsEmpty}
          />
        </div>

        <div className="flex flex-col gap-2 pt-11">
          <InputSelect
            roundedStyle="rounded-md"
            label="Category"
            background="bg-gray-50"
            options={categories.map((category) => ({
              label: category.categoryName,
              value: category.id,
            }))}
            onChange={(value) => {
              setNewDevotion({
                ...newDevotion,
                category: value as string,
              });
            }}
          />
        </div>
        <InputText
          label="Title"
          defaultValue={defaultValues?.title}
          onChange={({ value }) =>
            setNewDevotion({ ...newDevotion, title: value })
          }
          hasError={titleIsEmpty}
        />

        <InputText
          label="Speaker"
          defaultValue={defaultValues?.speaker}
          onChange={({ value }) =>
            setNewDevotion({ ...newDevotion, speaker: value })
          }
          hasError={speakerIsEmpty}
        />

        <div className="flex flex-col gap-2">
          <InputSelect
            roundedStyle="rounded-md"
            label="Bible Version"
            background="bg-gray-50"
            options={bibles.versions}
            defaultValue={bibleVersion}
            onChange={(value) => {
              if (value === '') return;
              setBibleVersion(value as string);
            }}
          />
          <div className="flex items-center gap-2">
            {bibles.versionsLoading && (
              <div className="size-5 animate-spin rounded-full border-y-2 border-gold" />
            )}
            <div className="text-xs text-gray-500">
              Select the Bible version you want to use for the verse content
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <InputSelect
            roundedStyle="rounded-md"
            label="Bible Book"
            background="bg-gray-50"
            options={bibles.books}
            defaultValue={bibleBook}
            onChange={(value) => {
              if (value === '') return;
              setBibleBook(value as string);
            }}
          />
          <div className="flex items-center gap-2">
            {bibles.versionsLoading && (
              <div className="size-5 animate-spin rounded-full border-y-2 border-gold" />
            )}
            <div className="text-xs text-gray-500">
              Select the bible book you want to use to populate the verse input
              with the correct book name.
            </div>
          </div>
        </div>

        {/* Verse Input with auto-fetch capability */}
        <div className="relative">
          <InputText
            label="Verse"
            defaultValue={newDevotion.verse}
            onChange={({ value }) =>
              setNewDevotion({ ...newDevotion, verse: value })
            }
            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                if (bibleVersion) {
                  setFetchingVerse(true);
                  getBiblePassage(newDevotion.verse, bibleVersion)
                    .then((data) => {
                      if ((data as IHttpException).statusCode === 400) {
                        toast.error(
                          'Format for the verse is incorrect! Please use MAT.1.12 or MAT.1.12-MAT.1.20. Ensure the book name and dot notation are correct.'
                        );
                        setVerseIsEmpty(true);
                        return;
                      }
                      if ((data as IHttpException).message) {
                        toast.error((data as IHttpException).message);
                        setVerseIsEmpty(true);
                        return;
                      }
                      setNewDevotion((prev) => ({
                        ...prev,
                        content: (data as unknown as IBiblePassageResponse)
                          .content,
                      }));
                    })
                    .finally(() => {
                      setFetchingVerse(false);
                    });
                }
              }
            }}
            hasError={verseIsEmpty}
          />
          {fetchingVerse && (
            <div className="absolute right-3 top-3">
              <div className="size-5 animate-spin rounded-full border-y-2 border-gold" />
            </div>
          )}
          <div className="mt-1 text-xs text-gray-500">
            Enter a valid Bible verse (i.e. MAT.1.12) or range of verses (i.e.
            MAT.1.12-MAT.1.20) and press enter to automatically populate the
            content.
          </div>
        </div>
        <div
          className={
            newDevotion.content?.length === 0
              ? 'flex flex-col gap-2 border border-secondary-orange '
              : 'flex flex-col gap-2 border'
          }
        >
          <DraftEditor
            handleEditorChange={(value) =>
              setNewDevotion({ ...newDevotion, content: value })
            }
            defaultValue={newDevotion.content}
            placeholder="Verse's content goes here"
          />
        </div>
        {newDevotion.attachments.length !== 0 && (
          <div className="flex items-center gap-2 pb-5">
            <span className="text-sm font-semibold">
              Previous cover audio(s) {'>'}
            </span>
            <div className="flex flex-wrap gap-3">
              {newDevotion.attachments.map((audio, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <div className="relative" key={i}>
                  <audio controls className="w-36">
                    <source src={audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                  <div
                    className="absolute right-1 top-1 cursor-pointer rounded-full bg-white p-1 hover:bg-gray-200"
                    onClick={() => removeAudio(audio)}
                  >
                    <img
                      src="/assets/icons/black-close.svg"
                      alt="close"
                      className="w-2"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <InputFile
          label="Audio goes here"
          title="Upload the devotional's Audio"
          file={uploadedAudio}
          setFile={setUploadedAudio}
          accepted="audio/*"
          hasError={audioIsEmpty}
        />
      </div>
    </>
  );
};
export default AddDevotion;
