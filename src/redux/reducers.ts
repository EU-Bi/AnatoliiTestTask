import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Product, ProductState} from '../interface/interfaceProduct';
import {fetchProducts} from './actions';

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload;
      },
    );
  },
});

export const productReducer = productSlice.reducer;
