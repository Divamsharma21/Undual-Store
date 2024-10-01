const initialState = {
    products: {
      categories: [],
      products: [],
      selectedCategory: '',
      search: '',
      loading: false,
      error: null,
    },
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'products/fetchCategories/fulfilled':
        return { ...state, products: { ...state.products, categories: action.payload } };
      case 'products/fetchProducts/fulfilled':
        return { ...state, products: { ...state.products, products: [...state.products.products, ...action.payload] } };
      case 'products/setSelectedCategory':
        return { ...state, products: { ...state.products, selectedCategory: action.payload } };
      case 'products/resetProducts':
        return { ...state, products: { ...state.products, products: [] } };
      default:
        return state;
    }
  };
  
  export default rootReducer;