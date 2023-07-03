/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import moment from 'moment';

import { toTitleCase } from '@/lib/helper';
import { EDevotionStatus, type IDevotion } from '@/types/devotion.types';

import { Badge } from './Badge';

interface ICard {
  views: number;
  devotion: IDevotion;
  handleClick?: () => void;
}
const Card: React.FC<ICard> = ({ views, devotion, handleClick }) => {
  return (
    <div
      className="grid cursor-pointer grid-cols-8 items-start gap-4 font-dmSans md:flex-row"
      onClick={handleClick}
    >
      {devotion?.createdAt && (
        <div className="pt-5 font-poppins text-sm font-light text-gray-600 md:col-span-2 lg:col-span-1">
          {moment(devotion.createdAt).format('MMM')}{' '}
          {moment(devotion.createdAt).format('DD')}{' '}
          <span className="md:text-xl">
            {moment(devotion.createdAt).format('YYYY')}
          </span>
        </div>
      )}
      <div className="col-span-7 flex flex-col gap-6 rounded-2xl border-2 border-gray-150 p-2 pr-4 hover:shadow-lg md:col-span-6 lg:col-span-7 lg:flex-row">
        <div className="">
          <div className="relative h-full w-full lg:h-40 lg:w-40">
            <img
              src={
                devotion.coverImage
                  ? devotion.coverImage
                  : 'https://placehold.co/600x400?text=Grace'
              }
              alt=""
              className="h-full w-full rounded-xl object-cover object-center"
            />
            <div className="absolute bottom-2 left-2 font-raleway">
              <Badge
                title={
                  devotion?.status === EDevotionStatus.DRAFT
                    ? 'Unapproved'
                    : toTitleCase(devotion.status)
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
          </div>
        </div>
        <div className="flex w-[100%] flex-col justify-between gap-2">
          <div className="flex items-center justify-between">
            <div className="justify-start font-dmSans text-xl font-semibold">
              {devotion?.title.length > 10
                ? `${devotion.title.slice(0, 10)}...`
                : devotion.title}
            </div>
            <div className="font-poppins text-sm font-light text-gray-600">
              {moment(devotion?.createdAt).fromNow()}
            </div>
          </div>
          <div className="max-h-10 overflow-hidden text-sm text-gray-850">
            <span
              className="text-ellipsis"
              style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
              }}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: devotion?.content }}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-backgroundAccent px-2 py-1 text-center text-xs leading-4 text-white">
                {devotion?.user?.name?.split('')[0]?.charAt(0) ?? '-'}
              </span>
              <span className="text-sm font-medium text-black">
                {devotion?.user?.name}
              </span>
            </div>
            <div className="text-sm text-gray-600">{views} Views</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
