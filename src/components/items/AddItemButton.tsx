'use client';

import { openAddItemModal } from '@/redux/slices/uiSlice';
import { PlusIcon } from '@heroicons/react/20/solid';
import { useDispatch } from 'react-redux';

export default function AddItemButton() {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(openAddItemModal())}
      className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
      Add Task
    </button>
  );
}
