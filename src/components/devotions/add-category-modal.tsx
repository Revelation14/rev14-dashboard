/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { FC } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

import { InputText } from '@/components/common/InputText';
import Spinner from '@/components/common/Spinner';
import { getFromLocalStorage } from '@/lib/helper';
import { addDevotionCategory } from '@/services/devotion.service';
import type { IDevotionCategory } from '@/types/devotion.types';

interface IAddCategoryModal {
  isOpen: boolean;
  onClose: () => void;
  onCategoryAdded: (category: IDevotionCategory) => void;
}

const AddCategoryModal: FC<IAddCategoryModal> = ({
  isOpen,
  onClose,
  onCategoryAdded,
}) => {
  const [categoryName, setCategoryName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const user = JSON.parse(getFromLocalStorage('user'));

  const handleAddCategory = async () => {
    if (!categoryName.trim()) {
      setHasError(true);
      toast.error('Category name is required');
      return;
    }

    setIsLoading(true);
    const result = await addDevotionCategory(categoryName, user?.id);

    if (
      result &&
      typeof result === 'object' &&
      'id' in result &&
      (result as IDevotionCategory).id
    ) {
      toast.success('Category added successfully');
      onCategoryAdded(result as IDevotionCategory);
      setCategoryName('');
      setHasError(false);
      onClose();
    } else {
      toast.error('Failed to add category');
    }
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed left-0 top-0 z-50 flex size-full items-center justify-center bg-black/75 font-raleway">
      <div className="w-full max-w-md rounded-lg bg-white p-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-bold">Add New Category</h2>
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer text-2xl font-bold text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        </div>

        <div className="mb-6">
          <InputText
            label="Category Name"
            placeholder="Enter category name (e.g., Prayer, etc.)"
            defaultValue={categoryName}
            onChange={({ value }) => {
              setCategoryName(value);
              if (value.trim()) setHasError(false);
            }}
            hasError={hasError}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleAddCategory();
              }
            }}
          />
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            disabled={isLoading}
            className="rounded-lg bg-gray-300 px-6 py-2 font-medium text-gray-800 hover:bg-gray-400 disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleAddCategory}
            disabled={isLoading}
            className="flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-2 font-medium text-white hover:bg-gold/90 disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Spinner className="size-4" />
                Adding...
              </>
            ) : (
              'Add Category'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryModal;
