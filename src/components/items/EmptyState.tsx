'use client';

import { FolderIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { openAddItemModal } from '@/redux/slices/uiSlice';

interface EmptyStateProps {
  message: string;
}

export default function EmptyState({ message }: EmptyStateProps) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
      <div className="rounded-full bg-gray-100 p-3">
        <FolderIcon className="h-8 w-8 text-gray-400" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-900">
        No building tasks found
      </h3>
      <p className="mt-1 text-sm text-gray-500">{message}</p>
      <button
        onClick={() => dispatch(openAddItemModal())}
        className="mt-6 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
      >
        Add a new building task
      </button>
    </div>
  );
}
