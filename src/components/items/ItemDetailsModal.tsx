'use client';

import { closeDetailsModal } from '@/redux/slices/uiSlice';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export default function ItemDetailsModal() {
  const dispatch = useDispatch();
  const { isDetailsModalOpen, selectedItem } = useSelector(
    (state: RootState) => state.ui
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const getStatusBadgeStyles = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleClose = () => {
    dispatch(closeDetailsModal());
  };

  if (!selectedItem) {
    return null;
  }

  return (
    <Transition appear show={isDetailsModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 flex justify-between items-center"
                >
                  <span>Task Details</span>
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeStyles(
                      selectedItem.status
                    )}`}
                  >
                    {selectedItem.status.charAt(0).toUpperCase() +
                      selectedItem.status.slice(1)}
                  </span>
                </Dialog.Title>

                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">ID</h4>
                    <p className="mt-1 text-sm text-gray-900">
                      #{selectedItem.id}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Title</h4>
                    <p className="mt-1 text-sm text-gray-900">
                      {selectedItem.title}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500">
                      Description
                    </h4>
                    <p className="mt-1 text-sm text-gray-900">
                      {selectedItem.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500">
                      Created
                    </h4>
                    <p className="mt-1 text-sm text-gray-900">
                      {formatDate(selectedItem.createdAt)}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="inline-flex justify-center w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
