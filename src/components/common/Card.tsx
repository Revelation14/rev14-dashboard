/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import moment from 'moment';

import { Badge } from './Badge';

interface ICard {
  title: string;
  description: string;
  date: string;
  user: { firstName: string; lastName: string };
  views: number;
  status: 'published' | 'unpublished';
  handleClick?: () => void;
}
const Card: React.FC<ICard> = ({
  title,
  date,
  description,
  user,
  views,
  status,
  handleClick,
}) => {
  return (
    <div
      className="flex cursor-pointer flex-col items-start gap-4 md:flex-row"
      onClick={handleClick}
    >
      <div className="pt-5 text-sm font-light text-gray-600">
        {moment(date).format('MMM')} {moment(date).format('DD')}{' '}
        <span className="md:text-xl">{moment(date).format('YYYY')}</span>
      </div>
      <div className="flex flex-col gap-6 rounded-2xl border-2 border-gray-150  p-2 pr-4 hover:shadow-lg md:flex-row">
        <div className="w-full">
          <div className="relative h-full w-full lg:h-40 lg:w-40">
            <img
              src="/assets/images/Image.png"
              alt=""
              className="h-full w-full rounded-xl object-cover object-center"
            />
            <div className="absolute bottom-2 left-2">
              <Badge
                title={status === 'published' ? 'Published' : 'Unapproved'}
                backgroundColor={
                  status === 'published'
                    ? 'bg-secondary-green'
                    : 'bg-secondary-orange'
                }
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold">{title}</div>
            <div className="text-sm font-light text-gray-600">
              {moment(date).format('HH:MM:a')}
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
            >
              {description}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-backgroundAccent px-2 py-1 text-center text-xs leading-4 text-white">
                {user.firstName.charAt(0)}
              </span>
              <span className="text-sm font-medium text-black">
                {user.firstName} {user.lastName}
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
