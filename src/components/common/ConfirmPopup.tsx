/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { FC } from 'react';
import React from 'react';

import Spinner from './Spinner';

interface IConfirmPopup {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  loading: boolean;
}

const ConfirmPopup: FC<IConfirmPopup> = ({
  title,
  message,
  onConfirm,
  onCancel,
  loading,
}) => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black/75 font-raleway">
      <div className="rounded-lg bg-white p-8">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-lg font-bold">{title}</div>
          <div className="cursor-pointer" onClick={onCancel}>
            <img src="/assets/icons/black-close.svg" alt="" className="w-2" />
          </div>
        </div>
        <p className="mb-4">{message}</p>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onCancel}
            className="mr-2 rounded-lg bg-gray-300 px-4 py-2 hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="flex items-center justify-center rounded-lg bg-gold px-4 py-2 text-white hover:bg-gold/75"
          >
            {loading ? <Spinner className="h-5 w-5" /> : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPopup;
