/* eslint-disable no-nested-ternary */
import router from 'next/router';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import Button from '@/components/common/Button';
import AddCategoryModal from '@/components/devotions/add-category-modal';
import Layout from '@/layouts/dashboard/Layout';
import {
  deleteDevotionCategory,
  getDevotionCategories,
  updateDevotionCategory,
} from '@/services/devotion.service';
import type { IHttpException } from '@/types/common.types';
import type { IDevotionCategory } from '@/types/devotion.types';
import { EUserRole, type IUser } from '@/types/user.types';

import { getFromLocalStorage } from '../../lib/helper';
import { useAuth } from '../../store/auth.store';

const Categories = () => {
  const [categories, setCategories] = useState<IDevotionCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<IHttpException>();
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const [isUpdating, setIsUpdating] = useState<string | null>(null);

  const auth = useAuth();
  const user: IUser = JSON.parse(getFromLocalStorage('user'));

  useEffect(() => {
    if (!auth.user && !user) {
      router.push('/auth/login');
    }
    if (user && user.role !== EUserRole.SYSTEM_ADMIN) {
      router.push('/devotionals');
    }
  }, [auth.user, user]);

  const loadCategories = async () => {
    setIsLoading(true);
    const data = await getDevotionCategories();
    if (Array.isArray(data)) {
      setCategories(data);
    } else if (data && typeof data === 'object') {
      setError(data as IHttpException);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleDelete = async (id: string) => {
    setIsDeleting(id);
    const result = (await deleteDevotionCategory(id)) as unknown as {
      data: { message: string; statusCode: number };
    };
    if (result && result.data?.message && result.data?.statusCode === 200) {
      toast.success('Category deleted successfully');
      setCategories(categories.filter((cat) => cat.id !== id));
    } else {
      toast.error('Failed to delete category');
    }
    setIsDeleting(null);
  };

  const handleUpdate = async (id: string) => {
    if (!editingName.trim()) {
      toast.error('Category name cannot be empty');
      return;
    }
    setIsUpdating(id);
    const result = (await updateDevotionCategory(
      id,
      editingName
    )) as unknown as { message: string; statusCode: number };
    if (result && result.message && result?.statusCode === 200) {
      toast.success('Category updated successfully');
      setCategories(
        categories.map((cat) =>
          cat.id === id ? { ...cat, categoryName: editingName } : cat
        )
      );
      setEditingId(null);
      setEditingName('');
    } else {
      toast.error('Failed to update category');
    }
    setIsUpdating(null);
  };

  return (
    <>
      <Layout>
        <div className="min-h-screen rounded-2xl border border-gray-200 bg-white p-6">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Devotional Categories</h1>
            <Button
              icon="/assets/icons/plus.svg"
              text="Add Category"
              className="hover:bg-gold/75"
              handleClick={() => setShowCategoryModal(true)}
            />
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-gray-500">Loading categories...</div>
            </div>
          ) : error ? (
            <div className="rounded-lg bg-red-50 p-4 text-red-700">
              Error loading categories. Please try again.
            </div>
          ) : categories.length === 0 ? (
            <div className="rounded-lg bg-gray-50 p-8 text-center text-gray-500">
              No categories found. Create your first category!
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">
                      Category Name
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">
                      Created At
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category) => (
                    <tr
                      key={category.id}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="px-4 py-3">
                        {editingId === category.id ? (
                          <input
                            title="Category Name"
                            type="text"
                            value={editingName}
                            onChange={(e) => setEditingName(e.target.value)}
                            className="w-full rounded border border-gray-300 px-2 py-1"
                          />
                        ) : (
                          <span>{category.categoryName}</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-sm text-gray-600">
                          {new Date(category.createdAt).toLocaleDateString()}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex justify-center gap-2">
                          {editingId === category.id ? (
                            <>
                              <button
                                type="button"
                                onClick={() => handleUpdate(category.id)}
                                disabled={isUpdating === category.id}
                                className="rounded bg-green-600 px-3 py-1 text-sm text-white hover:bg-green-700 disabled:opacity-50"
                              >
                                {isUpdating === category.id
                                  ? 'Saving...'
                                  : 'Save'}
                              </button>
                              <button
                                type="button"
                                onClick={() => setEditingId(null)}
                                disabled={isUpdating === category.id}
                                className="rounded bg-gray-400 px-3 py-1 text-sm text-white hover:bg-gray-500 disabled:opacity-50"
                              >
                                Cancel
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                type="button"
                                onClick={() => {
                                  setEditingId(category.id);
                                  setEditingName(category.categoryName);
                                }}
                                className="rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
                              >
                                Edit
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  // alert before delete
                                  window.confirm(
                                    'Are you sure you want to delete this category? This action cannot be undone.'
                                  ) && handleDelete(category.id)
                                }
                                disabled={isDeleting === category.id}
                                className="rounded border border-red-600 px-3 py-1 text-sm text-red-600 hover:bg-red-100 disabled:opacity-50"
                              >
                                {isDeleting === category.id
                                  ? 'Deleting...'
                                  : 'Delete'}
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Layout>

      <AddCategoryModal
        isOpen={showCategoryModal}
        onClose={() => setShowCategoryModal(false)}
        onCategoryAdded={(newCategory) => {
          setCategories([...categories, newCategory]);
        }}
      />

      <Toaster
        toastOptions={{
          duration: 1500,
        }}
        position="top-center"
      />
    </>
  );
};

export default Categories;
