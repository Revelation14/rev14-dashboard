/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { ChangeEvent } from 'react';
import React, { useEffect, useRef, useState } from 'react';

const AddProfilePicturePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState('');

  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscKey = (event: { key: string }) => {
      if (event.key === 'Escape') {
        setShowPopup(false);
      }
    };

    const handleClickOutside = (event: { target: any }) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleTogglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handlePictureSelection = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedPicture(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Handle the submission logic for the profile picture
    // You can use the selectedPicture state for further processing
  };

  return (
    <>
      <div
        className="-right-0 top-0 h-[28px] w-[28px] cursor-pointer rounded-full bg-gray-150 p-2"
        onClick={handleTogglePopup}
      >
        <img
          src="/assets/icons/profile-edit.svg"
          alt=""
          className="h-full w-full"
        />
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-1/3 rounded-md bg-white p-6" ref={popupRef}>
            <h2 className="mb-4 text-xl">Add Profile Picture</h2>
            <div className="mt-4 flex flex-col items-center justify-center">
              <div className="flex h-60 w-60 items-center justify-center overflow-hidden rounded-full bg-gray-100">
                {selectedPicture ? (
                  <img
                    src={selectedPicture}
                    alt="Preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-sm font-normal text-gray-400">
                    No Image Uploaded
                  </span>
                )}
              </div>
              <form onSubmit={handleSubmit} className="mt-4 w-full">
                <label htmlFor="fileInput">
                  <input
                    type="file"
                    accept="image/*"
                    id="fileInput"
                    className="hidden"
                    onChange={handlePictureSelection}
                  />
                  <button
                    type="button"
                    className="w-full rounded-xl bg-gray-300 px-4 py-2 text-base text-gray-700"
                    onClick={() => {
                      const fileInput = document.getElementById('fileInput');
                      if (fileInput) {
                        fileInput.click();
                      }
                    }}
                  >
                    Choose File
                  </button>
                </label>
                <button
                  type="submit"
                  disabled={!selectedPicture}
                  className="w-full rounded-xl bg-gray-300 px-4 py-2 text-base text-gray-700"
                >
                  Upload
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddProfilePicturePopup;
