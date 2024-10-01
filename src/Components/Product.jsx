// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchCategories,
//   fetchProducts,
//   setSelectedCategory,
//   resetProducts
// } from "../Redux/productSlice";
// import Category from "../Components/Category";
// import ProductList from "../Components/ProductList";
// import { useSearchParams } from "react-router-dom";
// import "../App.css";

// const Product = () => {
//   const dispatch = useDispatch();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [search, setSearch] = useState("");
//   const [skip, setSkip] = useState(0);
//   const { categories, products, selectedCategory } = useSelector(
//     state => state.products
//   );

//   useEffect(
//     () => {
//       dispatch(fetchCategories());
//     },
//     [dispatch]
//   );

//   useEffect(
//     () => {
//       const category = searchParams.get("category") || "";
//       const searchQuery = searchParams.get("search") || "";
//       setSearch(searchQuery);

//       dispatch(setSelectedCategory(category));
//       dispatch(resetProducts());
//       dispatch(fetchProducts({ category, searchQuery, skip: 0 }));
//     },
//     [searchParams, dispatch]
//   );

//   const handleCategorySelect = category => {
//     const params = new URLSearchParams();
//     if (category) params.set("category", category);
//     if (search) params.set("search", search);
//     setSkip(0);
//     setSearchParams(params);
//   };

//   const handleSearch = e => {
//     setSearch(e.target.value);
//   };

//   const handleSearchSubmit = e => {
//     e.preventDefault();
//     const params = new URLSearchParams();
//     if (selectedCategory) params.set("category", selectedCategory);
//     if (search) params.set("search", search);
//     setSkip(0);
//     setSearchParams(params);
//   };

//   const handleLoadMore = () => {
//     const newSkip = skip + 10;
//     setSkip(newSkip);
//     dispatch(
//       fetchProducts({
//         category: selectedCategory,
//         searchQuery: search,
//         skip: newSkip
//       })
//     );
//   };

//   console.log(products);
//   return (
//     <div className="bg-slate-800">
//       <div className="container mx-auto flex flex-col gap-10 p-4  ">
//         <h1 className="text-3xl font-bold text-center text-yellow-500 mb-4 transition-all">
//           🛍️ Undual Store
//         </h1>
//         <div className="flex items-center justify-between mb-4">
//           <Category
//             categories={categories}
//             onSelectCategory={handleCategorySelect}
//             selectedCategory={selectedCategory}
//           />
//           <form
//             onSubmit={handleSearchSubmit}
//             className="flex justify-center w-1/2"
//           >
//             <input
//               type="text"
//               value={search}
//               onChange={handleSearch}
//               placeholder="Search products..."
//               className="border border-gray-300 rounded-lg p-2 w-1/2 mr-2"
//             />
//             <button
//               type="submit"
//               className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition"
//             >
//               Search
//             </button>
//           </form>
//         </div>
//         <ProductList products={products} />
//         {products.length > 0 &&
//           <button
//             aria-disabled={products.length < 10}
//             disabled={products.length < 10}
//             onClick={handleLoadMore}
//             className={`load-more my-10 px-4 py-2 rounded-lg transition 
//           ${products.length < 10
//             ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//             : "bg-blue-500 text-white hover:bg-blue-600"}
//         `}
//           >
//             More Products
//           </button>}
//       </div>
//     </div>
//   );
// };

// export default Product;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  fetchProducts,
  setSelectedCategory,
  resetProducts
} from "../Redux/productSlice";
import Category from "../Components/Category";
import ProductList from "../Components/ProductList";
import { useSearchParams } from "react-router-dom";
import "../App.css";

const Product = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState(0);
  const { categories, products, selectedCategory } = useSelector(
    state => state.products
  );

  useEffect(
    () => {
      dispatch(fetchCategories());
    },
    [dispatch]
  );

  useEffect(
    () => {
      const category = searchParams.get("category") || "";
      const searchQuery = searchParams.get("search") || "";
      setSearch(searchQuery);

      dispatch(setSelectedCategory(category));
      dispatch(resetProducts());
      dispatch(fetchProducts({ category, searchQuery, skip: 0 }));
    },
    [searchParams, dispatch]
  );

  const handleCategorySelect = category => {
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (search) params.set("search", search);
    setSkip(0);
    setSearchParams(params);
  };

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (selectedCategory) params.set("category", selectedCategory);
    if (search) params.set("search", search);
    setSkip(0);
    setSearchParams(params);
  };

  const handleLoadMore = () => {
    const newSkip = skip + 10;
    setSkip(newSkip);
    dispatch(
      fetchProducts({
        category: selectedCategory,
        searchQuery: search,
        skip: newSkip
      })
    );
  };

  console.log(products);
  return (
    <div className="bg-slate-800">
      <div className="container mx-auto flex flex-col gap-10 p-4  ">
        <h1 className="text-3xl font-bold text-center text-yellow-500 mb-4 transition-all">
          🛍️ Undual Store
        </h1>
        <div className="flex items-center justify-between mb-4">
          <Category
            categories={categories}
            onSelectCategory={handleCategorySelect}
            selectedCategory={selectedCategory}
          />
          <form
            onSubmit={handleSearchSubmit}
            className="flex justify-center w-1/2"
          >
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search products..."
              className="border border-gray-300 rounded-lg p-2 w-1/2 mr-2"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition"
            >
              Search
            </button>
          </form>
        </div>
        {products && <ProductList products={products} />}
        {products && products.length > 0 &&
          <button
            aria-disabled={products.length < 10}
            disabled={products.length < 10}
            onClick={handleLoadMore}
            className={`load-more my-10 px-4 py-2 rounded-lg transition 
          ${products.length < 10
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"}`}
          >
            More Products
          </button>}
      </div>
    </div>
  );
};

export default Product;