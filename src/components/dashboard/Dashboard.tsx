'use client';

import AddItemButton from '@/components/items/AddItemButton';
import AddItemForm from '@/components/items/AddItemForm';
import ItemDetailsModal from '@/components/items/ItemDetailsModal';
import ItemList from '@/components/items/ItemList';

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Home Building Tasks
        </h1>
        <AddItemButton />
      </div>

      <ItemList />

      <AddItemForm />
      <ItemDetailsModal />
    </div>
  );
}
