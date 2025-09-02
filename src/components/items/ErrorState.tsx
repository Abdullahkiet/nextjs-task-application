'use client';

import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

interface ErrorStateProps {
  message: string;
}

export default function ErrorState({ message }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
      <div className="rounded-full bg-red-100 p-3">
        <ExclamationTriangleIcon
          className="h-8 w-8 text-red-600"
          aria-hidden="true"
        />
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-900">Error</h3>
      <p className="mt-1 text-sm text-gray-500">{message}</p>
    </div>
  );
}
