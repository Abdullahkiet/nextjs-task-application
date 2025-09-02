import { Item } from '@/types/item';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  isAddItemModalOpen: boolean;
  isDetailsModalOpen: boolean;
  selectedItem: Item | null;
}

const initialState: UiState = {
  isAddItemModalOpen: false,
  isDetailsModalOpen: false,
  selectedItem: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openAddItemModal: (state) => {
      state.isAddItemModalOpen = true;
    },
    closeAddItemModal: (state) => {
      state.isAddItemModalOpen = false;
    },
    openDetailsModal: (state, action: PayloadAction<Item>) => {
      state.isDetailsModalOpen = true;
      state.selectedItem = action.payload;
    },
    closeDetailsModal: (state) => {
      state.isDetailsModalOpen = false;
      state.selectedItem = null;
    },
  },
});

export const {
  openAddItemModal,
  closeAddItemModal,
  openDetailsModal,
  closeDetailsModal,
} = uiSlice.actions;

export default uiSlice.reducer;
