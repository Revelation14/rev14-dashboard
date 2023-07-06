import type { Dispatch, FC, SetStateAction } from 'react';
import React from 'react';

import type { IDevotion } from '@/types/devotion.types';

import { Card } from '../common/Card';

interface ISingleDevotion {
  devotion: IDevotion;
  setSelectedDevotion?: Dispatch<SetStateAction<IDevotion | undefined>>;
  setShowViewSplitScreens: Dispatch<SetStateAction<boolean>>;
}

const SingleDevotion: FC<ISingleDevotion> = ({
  setShowViewSplitScreens,
  setSelectedDevotion,
  devotion,
}) => {
  return (
    <Card
      devotion={devotion}
      handleClick={() => {
        if (setSelectedDevotion) {
          setSelectedDevotion(devotion);
        }
        setShowViewSplitScreens(true);
      }}
    />
  );
};

export default SingleDevotion;
