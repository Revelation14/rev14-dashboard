/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import moment from 'moment';

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
      className="grid cursor-pointer grid-cols-8 items-start gap-4 md:flex-row"
      onClick={handleClick}
    >
      {devotion?.createdAt && (
        <div className="pt-5 text-sm font-light text-gray-600 md:col-span-2 lg:col-span-1">
          {moment(devotion.createdAt).format('MMM')}{' '}
          {moment(devotion.createdAt).format('DD')}{' '}
          <span className="md:text-xl">
            {moment(devotion.createdAt).format('YYYY')}
          </span>
        </div>
      )}
      <div className="col-span-7 flex flex-col gap-6 rounded-2xl border-2 border-gray-150 p-2 pr-4  hover:shadow-lg md:col-span-6 lg:col-span-7 lg:flex-row">
        <div className="">
          <div className="relative h-full w-full lg:h-40 lg:w-40">
            <img
              src={
                devotion.coverImage
                  ? devotion.coverImage
                  : '/assets/images/Image.png'
              }
              alt=""
              className="h-full w-full rounded-xl object-cover object-center"
            />
            <div className="absolute bottom-2 left-2">
              <Badge
                title={
                  devotion?.status === EDevotionStatus.PUBLISHED
                    ? 'Published'
                    : 'Unapproved'
                }
                backgroundColor={
                  devotion?.status === EDevotionStatus.PUBLISHED
                    ? 'bg-secondary-green'
                    : 'bg-secondary-orange'
                }
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold">
              {devotion?.title.length > 10
                ? `${devotion.title.slice(0, 10)}...`
                : devotion.title}
            </div>
            <div className="text-sm font-light text-gray-600">
              {moment(devotion?.createdAt).format('HH:MM:a')}
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
