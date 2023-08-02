import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {productReducer} from './reducers';
import {basketReducer} from './reducerBasket';

export const rootReducer = combineReducers({
  product: productReducer,
  basket: basketReducer,
});

const store = configureStore({
  reducer: {
    root: rootReducer,
  },
});

export default store;
