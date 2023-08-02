import {createAsyncThunk} from '@reduxjs/toolkit';
import axios, {AxiosResponse} from 'axios';
import {Product} from '../interface/interfaceProduct';

type ProductData = Product[];

// Replace 'YourFetchProductsResponse' with the actual type of response data returned by the 'fetchProducts' API call
type FetchProductsResponse = AxiosResponse<ProductData>;

// Create the 'fetchProducts' async thunk action
export const fetchProducts = createAsyncThunk(
  'product/fetchProducts', // Action type prefix for this async thunk action
  async () => {
    try {
      const response = await axios.get<FetchProductsResponse>(
        'https://dummyjson.com/products',
      );
      return response.data.products;
    } catch (error) {
      throw error;
    }
  },
);
