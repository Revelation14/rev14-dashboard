/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import type { Dispatch, FormEvent, SetStateAction } from 'react';
import { useRef } from 'react';
import { toast } from 'react-hot-toast';

import { ActionButton } from './ActionButton';

interface IInputFile {
  label: string;
  title: string;
  file?: File | File[];
  setFile:
    | Dispatch<SetStateAction<File | undefined>>
    | Dispatch<SetStateAction<File[] | undefined>>;
  accepted: string;
  multiple?: boolean;
}

const InputFile: React.FC<IInputFile> = ({
  label,
  title,
  file,
  setFile,
  accepted,
  multiple = false,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleUpload = () => {
    // @ts-expect-error current can be null
    inputRef.current.click();
  };

  const handleFileUpload = (event: FormEvent) => {
    if (multiple) {
      // @ts-expect-error file is not known
      const newfiles: File[] = event.target.files;

      const invalidFiles = [];
      const heavyFiles = [];
      const fileType = accepted.split('*')[0] ?? '';

      Array.from(newfiles).forEach((f) => {
        const fileSizeInMB = f.size / (1024 * 1024); // Convert file size to MB
        if (!f.type.startsWith(fileType)) {
          invalidFiles.push(f);
        }
        if (fileSizeInMB > 10) {
          heavyFiles.push(f);
        }
      });

      if (invalidFiles.length !== 0) {
        toast.error('Invalid file format. Please select audio files only.');
        return;
      }

      if (heavyFiles.length !== 0) {
        toast.error(
          'Audio file size should not exceed the maximum allowed limit of 10 MB.'
        );
        return;
      }
      if (file) {
        // @ts-ignore
        setFile((prevFile) => [...prevFile, ...newfiles]);
      } else {
        // @ts-ignore
        setFile([...newfiles]);
      }
    } else {
      // @ts-expect-error file is not known
      const newfile = event.target.files[0];
      const fileSizeInMB = newfile.size / (1024 * 1024); // Convert file size to MB
      if (!newfile.type.startsWith(accepted.split('*')[0])) {
        toast.error('Invalid file format. Please select an audio file.');
      }
      if (fileSizeInMB > 10) {
        toast.error('File size exceeds the maximum allowed limit of 10 MB.');
      } else {
        setFile(newfile);
      }
    }
  };

  const clearMultipleFiles = (selectedFile: string) => {
    const fileRemoved = (file as File[]).filter((f) => f.name !== selectedFile);
    // @ts-ignore
    setFile(fileRemoved);
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
            accept={accepted}
            multiple={multiple}
          />
          {file && (
            <div className="mt-2 flex items-center justify-center gap-4">
              {Array.isArray(file) ? (
                file.map((f) => (
                  <div
                    key={f.name}
                    className="flex items-center justify-center gap-2"
                  >
                    <div className="text-xs text-gray-850">{f.name}</div>
                    <div
                      onClick={() => clearMultipleFiles(f.name)}
                      className="text-sm text-red-600"
                    >
                      x
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <div className="text-xs text-gray-850">{file.name}</div>
                  <div onClick={clearFile} className="text-sm text-red-600">
                    x
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { InputFile };
