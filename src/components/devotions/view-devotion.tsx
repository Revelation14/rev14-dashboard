/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import moment from 'moment';
import type { Dispatch, FC, SetStateAction } from 'react';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

import DraftEditor from '@/components/common/Editor';
import { toTitleCase } from '@/lib/helper';
import { deleteDevotion, getDevotions } from '@/services/devotion.service';
import type { IHttpException } from '@/types/common.types';
import { EDevotionStatus, type IDevotion } from '@/types/devotion.types';

import { Badge } from '../common/Badge';
import ConfirmPopup from '../common/ConfirmPopup';

interface IViewDevotion {
  devotion?: IDevotion;
  attachments: string[];
  setDevotions: Dispatch<SetStateAction<IDevotion[]>>;
  setAllDevotions: Dispatch<SetStateAction<IDevotion[]>>;
  setShowViewSplitScreens: Dispatch<SetStateAction<boolean>>;
  setShowEditSplitScreens: Dispatch<SetStateAction<boolean>>;
}

const ViewDevotion: FC<IViewDevotion> = ({
  devotion,
  setShowViewSplitScreens,
  setShowEditSplitScreens,
  attachments,
  setDevotions,
  setAllDevotions,
}) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSuccess = (message = 'Devotion deleted successfully!') => {
    toast.success(message);
    getDevotions()
      .then((data) => {
        setDevotions(data as IDevotion[]);
        setAllDevotions(data as IDevotion[]);
      })
      .catch((err) => {
        toast.error((err as IHttpException).message);
      });
    setShowViewSplitScreens(false);
  };

  const handleError = (err: IHttpException) => {
    toast.error(err.message);
  };

  const handleDelete = () => {
    setLoading(true);
    deleteDevotion(devotion?.id ?? '')
      .then(() => {
        handleSuccess();
      })
      .catch((err) => {
        handleError(err as IHttpException);
      })
      .finally(() => {
        setLoading(false);
        setShowDeleteConfirmation(false);
      });
  };

  return (
    <div className="flex flex-col gap-8 font-dmSans">
      {showDeleteConfirmation && (
        <ConfirmPopup
          title="Confirm deletion"
          message="Are you sure you want to delete this devotion?"
          onCancel={() => setShowDeleteConfirmation(false)}
          onConfirm={handleDelete}
          loading={loading}
        />
      )}
      <div className="flex w-full flex-col justify-between font-raleway md:flex-row md:items-center">
        {/** Top */}
        <div className="flex flex-col gap-3 md:hidden">
          <div className="flex w-full items-center justify-between gap-2">
            <div className="flex items-center gap-4">
              <span className="h-7 w-7 rounded-full bg-backgroundAccent pt-1 text-center text-xs text-white">
                {devotion?.user?.name?.split('')[0]?.charAt(0) ?? '-'}
              </span>
              <span className="text-sm font-medium text-black">
                {devotion?.user?.name ?? '-'}
              </span>
            </div>
            {devotion?.createdAt ? (
              <div className="text-sm text-gray-600">
                Submitted On: {moment(devotion?.createdAt).format('MMM')}{' '}
                {moment(devotion?.createdAt).format('DD')}
              </div>
            ) : (
              <div className="text-sm text-gray-600">Submitted On: -</div>
            )}
          </div>
          <div className="flex w-full items-center justify-center">
            <div className="flex items-center gap-4">
              <div
                className="cursor-pointer rounded-full bg-gray-50 p-3"
                onClick={() => {
                  setShowDeleteConfirmation(true);
                }}
              >
                <img src="/assets/icons/delete.svg" alt="" className="" />
              </div>
              <div
                className="cursor-pointer rounded-full bg-gray-50 p-3"
                onClick={() => {
                  setShowViewSplitScreens(false);
                  setShowEditSplitScreens(false);
                }}
              >
                <img src="/assets/icons/edit.svg" alt="" className="" />
              </div>
              <div
                className="cursor-pointer rounded-full bg-gray-50 p-3"
                onClick={() => {
                  setShowViewSplitScreens(false);
                  setShowEditSplitScreens(false);
                }}
              >
                <img
                  src="/assets/icons/black-close.svg"
                  alt=""
                  className="w-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden w-full md:block">
          <div className="flex w-full items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="h-7 w-7 rounded-full bg-backgroundAccent pt-1 text-center text-xs text-white">
                {devotion?.user?.name?.split('')[0]?.charAt(0) ?? '-'}
              </span>
              <span className="text-sm font-medium text-black">
                {devotion?.user?.name ?? '-'}
              </span>
            </div>
            {devotion?.createdAt ? (
              <div className="text-xs text-gray-600">
                Submitted On: {moment(devotion?.createdAt).format('MMM')}{' '}
                {moment(devotion?.createdAt).format('DD')}
              </div>
            ) : (
              <div className="text-xs text-gray-600">Submitted On: -</div>
            )}
            <div className="flex items-center gap-4">
              <div
                className="cursor-pointer rounded-full bg-gray-50 p-3"
                onClick={() => {
                  setShowViewSplitScreens(false);
                  setShowEditSplitScreens(true);
                }}
              >
                <img src="/assets/icons/edit.svg" alt="" className="" />
              </div>
              <div
                className="cursor-pointer rounded-full bg-gray-50 p-3"
                onClick={() => {
                  setShowDeleteConfirmation(true);
                }}
              >
                <img src="/assets/icons/delete.svg" alt="" className="" />
              </div>
              <div
                className="cursor-pointer rounded-full bg-gray-50 p-3"
                onClick={() => {
                  setShowViewSplitScreens(false);
                  setShowEditSplitScreens(false);
                }}
              >
                <img
                  src="/assets/icons/black-close.svg"
                  alt=""
                  className="w-2"
                />
              </div>
            </div>
          </div>
        </div>
        {/** End of Top */}
      </div>
      <img
        src={
          devotion?.coverImage
            ? devotion?.coverImage
            : 'https://placehold.co/600x400?text=Grace'
        }
        alt=""
      />
      <div className="text-base font-semibold">Title</div>
      <div className="flex items-center justify-between">
        <div>{devotion?.title ?? '-'}</div>
        <Badge
          title={
            devotion?.status === EDevotionStatus.DRAFT
              ? 'Unapproved'
              : toTitleCase(devotion?.status ?? '')
          }
          backgroundColor={
            devotion?.status === EDevotionStatus.PUBLISHED
              ? 'bg-secondary-green'
              : devotion?.status === EDevotionStatus.DRAFT
              ? 'bg-secondary-orange'
              : 'bg-red-600'
          }
        />
      </div>
      <div className="text-base font-semibold">Verse</div>
      <div>{devotion?.verse ?? '-'}</div>
      <div className="scrollbar overflow-auto">
        <DraftEditor
          viewOnly
          defaultValue={devotion?.content ?? ''}
          handleEditorChange={() => {}}
        />
      </div>
      <div className="flex flex-col gap-2">
        {attachments.length !== 0 &&
          attachments?.map((audio, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <audio controls key={i}>
              <source src={audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          ))}
      </div>
    </div>
  );
};
export default ViewDevotion;
