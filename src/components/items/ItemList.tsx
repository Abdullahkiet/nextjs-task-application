'use client';

import { useGetItemsQuery } from '@/redux/api/apiSlice';
import { openDetailsModal } from '@/redux/slices/uiSlice';
import { ItemStatus } from '@/types/item';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ItemsTable from './ItemsTable';
import SearchAndFilter from './SearchAndFilter';
import Pagination from './Pagination';
import LoadingState from './LoadingState';
import ErrorState from './ErrorState';
import EmptyState from './EmptyState';

export default function ItemList() {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    title: '',
    status: '' as ItemStatus | '',
    page: 1,
    limit: 5,
  });

  const { data, isLoading, isError, error } = useGetItemsQuery({
    title: filters.title || undefined,
    status: filters.status as ItemStatus | undefined,
    page: filters.page,
    limit: filters.limit,
  });

  const handleItemClick = (itemId: number) => {
    const item = data?.items.find((item) => item.id === itemId);
    if (item) {
      dispatch(openDetailsModal(item));
    }
  };

  const handleSearch = (searchTerm: string) => {
    setFilters((prev) => ({ ...prev, title: searchTerm, page: 1 }));
  };

  const handleFilterChange = (status: ItemStatus | '') => {
    setFilters((prev) => ({ ...prev, status, page: 1 }));
  };

  const handlePageChange = (newPage: number) => {
    setFilters((prev) => ({ ...prev, page: newPage }));
  };

  if (isLoading) {
    return <LoadingState />;
  }

  if (isError) {
    return (
      <ErrorState
        message={
          (error as unknown as { data: { message: string } })?.data?.message ||
          'Failed to load items'
        }
      />
    );
  }

  if (!data || data.items.length === 0) {
    return (
      <EmptyState message="No items found. Try adjusting your filters or add a new item." />
    );
  }

  return (
    <div className="space-y-6">
      <SearchAndFilter
        searchTerm={filters.title}
        onSearch={handleSearch}
        statusFilter={filters.status}
        onFilterChange={handleFilterChange}
      />

      <ItemsTable items={data.items} onItemClick={handleItemClick} />

      <Pagination
        currentPage={filters.page}
        totalPages={Math.ceil(data.total / filters.limit)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
