import React from "react";
import '../App.css'
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Categories = ({selectedCategory, setSelectedCategory}) => (
  // <h1>sidebar</h1>
  <Stack
  
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "90%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
     <button type="button" className="btn btn-custom"
        onClick={()=>setSelectedCategory(category.name)}
        style={{
          paddingBottom:'15px',
          background: category.name === selectedCategory && "#FC1503",
          color: "white",
        }}
        key={category.name}
      >
        <span style={{ color: category.name === selectedCategory ? "black" : "red" }}>
          {category.icon}
        </span>
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.5",marginLeft: "15px"}}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
 
);

// export default Categories;
// import React from "react";
// import { Stack } from "@mui/material";

// import { categories } from "../utils/constants";

// const Categories = ({ selectedCategory, setSelectedCategory }) => (
//   <Stack
//     direction="row"
//     sx={{
//       overflowY: "auto",
//       height: { sx: "auto", md: "95%" },
//       flexDirection: { md: "column" },
//     }}
//   >
//     {categories.map((category) => (
//       <button
//         className="category-btn"
//         onClick={() => setSelectedCategory(category.name)}
//         style={{
//           background: category.name === selectedCategory && "#FC1503",
//           color: "white",
//         }}
//         key={category.name}
//       >
//         <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
//           {category.icon}
//         </span>
//         <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
//           {category.name}
//         </span>
//       </button>
//     ))}
//   </Stack>
// );

export default Categories;
