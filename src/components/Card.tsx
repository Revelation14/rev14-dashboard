import moment from 'moment';

import { Badge } from './Badge';

interface ICard {
  title: string;
  description: string;
  date: string;
  user: { firstName: string; lastName: string };
  views: number;
  status: 'published' | 'unpublished';
}
const Card: React.FC<ICard> = ({
  title,
  date,
  description,
  user,
  views,
  status,
}) => {
  return (
    <div className="flex items-start gap-4">
      <div className="pt-5 text-sm font-light text-gray-600">
        {moment(date).format('MMM')} {moment(date).format('DD')}{' '}
        <span className="text-xl">{moment(date).format('YYYY')}</span>
      </div>
      <div className="flex gap-6 rounded-2xl border border-gray-150 p-2 pr-4">
        <div className="relative w-full">
          <img
            src="/assets/images/Image.png"
            alt=""
            className="h-full w-full rounded-xl object-cover object-center"
          />
          <div className="absolute left-2 top-32">
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
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="text-xl font-medium">{title}</div>
            <div className="text-sm font-light text-gray-600">
              {moment(date).format('HH:MM:a')}
            </div>
          </div>
          <div className="text-sm text-gray-850">{description}</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-backgroundAccent px-3 py-2 text-xs text-white">
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
