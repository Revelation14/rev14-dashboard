/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import type { Dispatch, FormEvent, SetStateAction } from 'react';
import { useRef } from 'react';

import { ActionButton } from './ActionButton';

interface IInputFile {
  label: string;
  title: string;
  file?: File;
  setFile: Dispatch<SetStateAction<File | undefined>>;
}

const InputFile: React.FC<IInputFile> = ({ label, title, file, setFile }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleUpload = () => {
    // @ts-expect-error current can be null
    inputRef.current.click();
  };

  const handleFileUpload = (event: FormEvent) => {
    // @ts-expect-error file is not known
    const newfile = event.target.files[0];
    setFile(newfile);
  };

  const clearFile = () => {
    setFile(undefined);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="font-medium text-gray-600">{label}</div>
      <div className="flex cursor-pointer flex-col items-center gap-3 rounded-xl border-2 border-dashed border-borderOpaque bg-gray-50 px-16 py-7">
        <div className="text-sm">{title}</div>
        <div className="">
          <ActionButton
            label="Browse files"
            backgroundColor="bg-gray-150"
            hoverBackgroundColor=""
            color="text-gray-600"
            width="w-full px-2"
            handleClick={handleUpload}
          />
          <input
            ref={inputRef}
            type="file"
            onChange={handleFileUpload}
            className="hidden"
          />
          {file && (
            <div className="mt-2 flex items-center justify-center gap-4">
              <div className="text-xs text-gray-850">{file.name}</div>
              <div onClick={clearFile} className="text-sm text-red-600">
                x
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { InputFile };
