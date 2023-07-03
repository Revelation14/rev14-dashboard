/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { Dispatch, SetStateAction } from 'react';
import React, { useEffect } from 'react';

export default function ErrorMessage({
  errorMessage,
  setErrorMessage,
}: {
  errorMessage: string;
  setErrorMessage: Dispatch<SetStateAction<string>>;
}) {
  useEffect(() => {
    setTimeout(() => {
      setErrorMessage('');
    }, 2000);
  }, []);

  return (
    <div className="flex items-center justify-between rounded-md bg-red-100 p-2 text-red-500">
      <div>{errorMessage}</div>
      <div
        className="cursor-pointer rounded-full bg-white p-2 text-black"
        onClick={() => setErrorMessage('')}
      >
        <img src="/assets/icons/black-close.svg" alt="" className="w-2" />
      </div>
    </div>
  );
}
