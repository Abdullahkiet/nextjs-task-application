export type ItemStatus = 'pending' | 'in-progress' | 'completed';

export interface Item {
  id: number;
  title: string;
  description: string;
  status: ItemStatus;
  createdAt: string;
}

export interface ItemsResponse {
  items: Item[];
  total: number;
}

export interface ItemFilters {
  title?: string;
  status?: ItemStatus;
  page: number;
  limit: number;
}
