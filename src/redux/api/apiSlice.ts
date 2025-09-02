import { Item, ItemFilters, ItemsResponse } from '@/types/item';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Items'],
  endpoints: (builder) => ({
    getItems: builder.query<ItemsResponse, ItemFilters>({
      query: (filters) => {
        const params = new URLSearchParams();
        if (filters.title) params.append('title', filters.title);
        if (filters.status) params.append('status', filters.status);
        params.append('page', filters.page.toString());
        params.append('limit', filters.limit.toString());

        return {
          url: `/items?${params.toString()}`,
          method: 'GET',
        };
      },
      providesTags: ['Items'],
    }),

    addItem: builder.mutation<Item, Omit<Item, 'id' | 'createdAt'>>({
      query: (newItem) => ({
        url: '/items',
        method: 'POST',
        body: newItem,
      }),
      invalidatesTags: ['Items'],
    }),
  }),
});

export const { useGetItemsQuery, useAddItemMutation } = apiSlice;
