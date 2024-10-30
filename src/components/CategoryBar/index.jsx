import React from "react";
import * as _ from "./style";
import Bakery from "../../assets/Category/Bakery";
import Meal from "../../assets/Category/Meal.png";
import Korean from "../../assets/Category/Korean.png";
import Cake from "../../assets/Category/Cake.png";
import { useNavigate } from "react-router-dom";

const CategoryBar = ({ selectedCategory, onCategorySelect }) => {
  const navigate = useNavigate();
  const categories = [
    { name: "베이커리", icon: <Bakery /> },
    { name: "디저트/음료", icon: <img src={Cake} alt="디저트/음료" /> },
    { name: "외식/다이닝", icon: <img src={Meal} alt="외식/다이닝" /> },
    { name: "한식", icon: <img src={Korean} alt="한식" /> },
  ];

  return (
    <_.Layout>
      {categories.map((category) => (
        <_.Category key={category.name}>
          <_.Icon
            onClick={() => {
              navigate(`/recipe`, { state: { category: category.name } });
            }}
            isSelected={selectedCategory === category.name}
          >
            {category.icon}
          </_.Icon>
          <_.Name>{category.name}</_.Name>
        </_.Category>
      ))}
    </_.Layout>
  );
};

export default CategoryBar;
