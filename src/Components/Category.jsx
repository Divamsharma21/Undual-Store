 
// import React from 'react';
// import Select from 'react-select';

// const Category = ({ categories, onSelectCategory, selectedCategory }) => {
//   const options = [
//     { value: '', label: 'All' },
//     ...categories.map((category) => ({
//       value: category.slug,
//       label: category.name,
//     })),
//   ];

//   return (
//     <div className="flex items-center gap-4 mb-4">
//       <h2 className="text-xl font-bold text-blue-500">Select Category :</h2>
//       <Select
//         options={options}
//         onChange={(option) => onSelectCategory(option.value)}
//         classNamePrefix="select"
//         placeholder=""
//         styles={{
//           control: (provided) => ({
//             ...provided,
//             width: "200px",
//             border: "1px solid #ccc",
//             borderRadius: "5px",
//             padding: "10px",
//           }),
//           option: (provided) => ({
//             ...provided,
//             color: "black",
//             backgroundColor: "white",
//             "&:hover": {
//               backgroundColor: "#f5f5f5",
//             },
//           }),
//         }}
//         defaultValue={options.find((option) => option.value === selectedCategory)}
//       />
//     </div>
//   );
// };

// export default Category;


import React from 'react';
import Select from 'react-select';

const Category = ({ categories, onSelectCategory, selectedCategory }) => {
  if (!categories) return null; // add this line to handle undefined categories

  const options = [
    { value: '', label: 'All' },
    ...categories.map((category) => ({
      value: category.slug,
      label: category.name,
    })),
  ];

  return (
    <div className="flex items-center gap-4 mb-4">
      <h2 className="text-xl font-bold text-blue-500">Select Category :</h2>
      <Select
        options={options}
        onChange={(option) => onSelectCategory(option.value)}
        classNamePrefix="select"
        placeholder=""
        styles={{
          control: (provided) => ({
            ...provided,
            width: "200px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "10px",
          }),
          option: (provided) => ({
            ...provided,
            color: "black",
            backgroundColor: "white",
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          }),
        }}
        defaultValue={options.find((option) => option.value === selectedCategory)}
      />
    </div>
  );
};

export default Category;