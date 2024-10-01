// import React from "react";

// const ProductList = ({ products }) => {
//   // Remove duplicates from products array
//   const uniqueProducts = [
//     ...new Set(products.map(product => product.id))
//   ].map(id => {
//     return products.find(product => product.id === id);
//   });

//   return (
//     <div className="product-list">
//       {uniqueProducts.length === 0
//         ? <div className="flex flex-col items-center my-10 text-center">
//             <span className="text-2xl text-gray-700">
//               🚫 No Product Found 😔
//             </span>
//             <p className="text-lg text-gray-600">
//               This Product currently Not Available Please try after Some days{" "}
//             </p>
//           </div>
//         : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {uniqueProducts.map(product =>
//               <div
//                 key={product.id}
//                 className="product-item bg-black text-white flex flex-col gap-2 rounded-lg shadow-md p-4 hover:cursor-pointer hover:shadow-lg transition hover:bg-blue-500"
//               >
//                 <img
//                   src={product.thumbnail}
//                   alt={product.title}
//                   className="w-full h-48 object-cover rounded-t-lg"
//                 />
//                 <h3 className="text-lg font-bold">
//                   {product.title}
//                 </h3>
//                 <p className="text-gray-300">
//                   {product.description}
//                 </p>
//                 <p className="text-purple-400 font-bold capitalize">
//                   {product.category}
//                 </p>
//                 <p className="text-blue-500 font-bold text-lg">
//                   Price: ${product.price}
//                 </p>
//               </div>
//             )}
//           </div>}
//     </div>
//   );
// };

// export default ProductList;


import React from "react";

const ProductList = ({ products }) => {
  if (!products) return null; // add this line to handle undefined products

  // Remove duplicates from products array
  const uniqueProducts = products
    ? [
        ...new Set(products.map((product) => product.id)),
      ].map((id) => {
        return products.find((product) => product.id === id);
      })
    : [];

  return (
    <div className="product-list">
      {uniqueProducts.length === 0 ? (
        <div className="flex flex-col items-center my-10 text-center">
          <span className="text-2xl text-gray-700">
            🚫 No Product Found 😔
          </span>
          <p className="text-lg text-gray-600">
            This Product currently Not Available Please try after Some days{" "}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {uniqueProducts.map((product) => (
            <div
              key={product.id}
              className="product-item bg-black text-white flex flex-col gap-2 rounded-lg shadow-md p-4 hover:cursor-pointer hover:shadow-lg transition hover:bg-blue-500"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-lg font-bold">{product.title}</h3>
              <p className="text-gray-300">{product.description}</p>
              <p className="text-purple-400 font-bold capitalize">
                {product.category}
              </p>
              <p className="text-blue-500 font-bold text-lg">
                Price: ${product.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;