import React, { useState } from "react";
import * as _ from "./style";
import LeftArrow from "../../assets/LeftArrow";
import SaleMenu from "../../components/SaleMenu";

const Recipe = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTap = (index) => {
    setSelectedTab(index);
  };
  return (
    <_.Layout>
      <_.Header>
        <LeftArrow />
        <_.Header_Title>디저트</_.Header_Title>
      </_.Header>
      <_.CategoryList>
        <_.Category>맵기</_.Category>
        <_.Category>온도</_.Category>
      </_.CategoryList>
      <_.Taps>
        <_.Tap isSelected={selectedTab === 1} onClick={() => handleTap(1)}>
          추천 메뉴
        </_.Tap>
        <_.Tap isSelected={selectedTab === 2} onClick={() => handleTap(2)}>
          추천 레시피
        </_.Tap>
      </_.Taps>
      <_.List>
        <SaleMenu />
        <SaleMenu />
        <SaleMenu />
        <SaleMenu />
      </_.List>
    </_.Layout>
  );
};

export default Recipe;
