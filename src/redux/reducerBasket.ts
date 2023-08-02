import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {BasketItem, BasketState} from '../interface/interfaceProduct';

const initialState: BasketState = {
  items: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItemToBasket: (state, action: PayloadAction<BasketItem>) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({...newItem, quantity: 1});
      }
    },
    removeItemFromBasket: (state, action: PayloadAction<number>) => {
      const idToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== idToRemove);
    },
    clearBasket: state => {
      state.items = [];
    },
  },
});

export const {addItemToBasket, removeItemFromBasket, clearBasket} =
  basketSlice.actions;
export const basketReducer = basketSlice.reducer;
