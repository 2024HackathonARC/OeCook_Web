import React from "react";
import * as _ from "./style";
import Bakery from "../../assets/Category/Bakery";
import Dessert from "../../assets/Category/Dessert";
import Meal from "../../assets/Category/Meal.png";
import Coffee from "../../assets/Category/Coffee.png";

const CategoryBar = () => {
  return (
    <_.Layout>
      <_.Category>
        <_.Icon>
          <Bakery />
        </_.Icon>
        <_.Name>베이커리</_.Name>
      </_.Category>
      <_.Category>
        <_.Icon>
          <Dessert />
        </_.Icon>
        <_.Name>디저트</_.Name>
      </_.Category>
      <_.Category>
        <_.Icon>
          <img src={Meal} alt="외식/다이닝" />
        </_.Icon>
        <_.Name>외식/다이닝</_.Name>
      </_.Category>
      <_.Category>
        <_.Icon>
          <img src={Coffee} alt="커피/음료" />
        </_.Icon>
        <_.Name>커피/음료</_.Name>
      </_.Category>
    </_.Layout>
  );
};

export default CategoryBar;
