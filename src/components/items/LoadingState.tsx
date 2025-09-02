'use client';

export default function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      <h3 className="mt-4 text-lg font-medium text-gray-900">
        Loading items...
      </h3>
    </div>
  );
}
