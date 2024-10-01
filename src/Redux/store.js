// Import the configureStore function from @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';

// Import the productReducer from the productSlice file
import productReducer from './productSlice';

// Create a Redux store with the productReducer as the reducer for the products slice
const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

// Export the store as the default export
export default store;