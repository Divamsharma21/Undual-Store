import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

 
export const fetchCategories = createAsyncThunk('products/fetchCategories', async () => {
    const response = await fetch('https://dummyjson.com/products/categories');
    return await response.json();
});
 
export const fetchProducts = createAsyncThunk('products/fetchProducts', async ({ category, searchQuery, skip }) => {
    let url = `https://dummyjson.com/products?limit=10&skip=${skip}`;
    if (category) url = `https://dummyjson.com/products/category/${category}?limit=10&skip=${skip}`;
    if (searchQuery !== "") {
       
        url = `https://dummyjson.com/products/search?q=${searchQuery}&limit=10&skip=${skip}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    console.log(data.products);
    return data.products;
});

// Product slice
const productSlice = createSlice({
    name: 'products',
    initialState: {
        categories: [],
        products: [],
        selectedCategory: '',
        loading: false,
        error: null,
    },
    reducers: {
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        resetProducts: (state) => {
            state.products = []; // Clear the product list
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                // Remove duplicates and append products for pagination
                state.products = [...new Set([...state.products, ...action.payload])];
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setSelectedCategory, resetProducts } = productSlice.actions;
export default productSlice.reducer;
// export { fetchCategories, fetchProducts };
// export const { setSelectedCategory, resetProducts } = productSlice.actions;