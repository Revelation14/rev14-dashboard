/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import moment from 'moment';
import React from 'react';

import DraftEditor from '@/components/common/Editor';
import { InputSelect } from '@/components/common/InputSelect';
import { toTitleCase } from '@/lib/helper';
import { EDevotionStatus, type IDevotion } from '@/types/devotion.types';

import { Badge } from '../common/Badge';

interface IViewDevotion {
  devotion?: IDevotion;
  attachments: string[];
  numberOfViews: number;
  setShowViewSplitScreens: React.Dispatch<React.SetStateAction<boolean>>;
  setShowEditSplitScreens: React.Dispatch<React.SetStateAction<boolean>>;
}

const ViewDevotion: React.FC<IViewDevotion> = ({
  devotion,
  numberOfViews,
  setShowViewSplitScreens,
  setShowEditSplitScreens,
  attachments,
}) => {
  return (
    <div className="flex flex-col gap-8 font-dmSans">
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
            <div className="text-sm text-gray-600">{numberOfViews} Views</div>
          </div>
          <div className="flex w-full items-center justify-center">
            <div className="flex items-center gap-4">
              <div>
                <InputSelect
                  label="Action"
                  background="bg-gray-50"
                  options={[
                    { label: 'Publish', value: 'publish' },
                    { label: 'Reject', value: 'reject' },
                  ]}
                />
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
            <div className="text-xs text-gray-600">{numberOfViews} Views</div>
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
      <div className="flex items-center justify-between">
        <div className="text-xl font-semibold">{devotion?.title ?? '-'}</div>
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
      <img
        src={
          devotion?.coverImage
            ? devotion?.coverImage
            : 'https://placehold.co/600x400?text=Grace'
        }
        alt=""
      />
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
