/* eslint-disable no-nested-ternary */
import React from 'react';

interface ISplitScreens {
  firstScreen: JSX.Element;
  secondScreen: JSX.Element;
  firstIsLarger?: boolean;
  secondIsLarger?: boolean;
}

const SplitScreens: React.FC<ISplitScreens> = ({
  firstScreen,
  secondScreen,
  firstIsLarger = false,
  secondIsLarger = false,
}) => {
  return (
    <div
      className={`grid grid-cols-1 gap-4 ${
        firstIsLarger
          ? 'lg:grid-cols-9'
          : secondIsLarger
          ? 'lg:grid-cols-7'
          : 'lg:grid-cols-3'
      }`}
    >
      <div
        className={`${
          firstIsLarger ? 'col-span-5' : secondIsLarger ? 'col-span-3' : ''
        } hidden min-h-screen rounded-2xl border border-gray-200 bg-white p-6 lg:block`}
      >
        {firstScreen}
      </div>
      <div
        className={`${
          firstIsLarger
            ? 'col-span-4'
            : secondIsLarger
            ? 'col-span-4'
            : 'col-span-2'
        } min-h-screen rounded-2xl border border-gray-200 bg-white p-6`}
      >
        {secondScreen}
      </div>
    </div>
  );
};

export default SplitScreens;
