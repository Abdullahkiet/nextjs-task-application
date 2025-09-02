'use client';

import { ItemStatus } from '@/types/item';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

interface SearchAndFilterProps {
  searchTerm: string;
  onSearch: (term: string) => void;
  statusFilter: ItemStatus | '';
  onFilterChange: (status: ItemStatus | '') => void;
}

export default function SearchAndFilter({
  searchTerm,
  onSearch,
  statusFilter,
  onFilterChange,
}: SearchAndFilterProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between">
      <div className="relative flex-1">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          type="text"
          className="block w-full rounded-md border-0 py-2 pl-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      <select
        className="block w-full sm:w-48 rounded-md border-0 py-2 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
        value={statusFilter}
        onChange={(e) => onFilterChange(e.target.value as ItemStatus | '')}
      >
        <option value="">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
}
