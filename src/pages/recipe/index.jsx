import React, { useState } from "react";
import * as _ from "./style";
import LeftArrow from "../../assets/LeftArrow";
import SaleMenu from "../../components/SaleMenu";
import SpicyModal from "../../components/Modals/SpicyModal";
import TempModal from "../../components/Modals/TempModal";

const Recipe = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [isSpicyModalOpen, setIsSpicyModalOpen] = useState(false);
  const [isTempModalOpen, setIsTempModalOpen] = useState(false);

  const handleTap = (index) => {
    setSelectedTab(index);
  };

  const openSpicyModal = () => {
    setIsSpicyModalOpen(true);
    setIsTempModalOpen(false);
  };

  const openTempModal = () => {
    setIsTempModalOpen(true);
    setIsSpicyModalOpen(false);
  };

  return (
    <_.Layout>
      <_.Header>
        <LeftArrow />
        <_.Header_Title>디저트</_.Header_Title>
      </_.Header>
      <_.CategoryList>
        <_.Category onClick={openSpicyModal}>맵기</_.Category>
        <_.Category onClick={openTempModal}>온도</_.Category>
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
      {isSpicyModalOpen && (
        <SpicyModal onClose={() => setIsSpicyModalOpen(false)} />
      )}
      {isTempModalOpen && (
        <TempModal onClose={() => setIsTempModalOpen(false)} />
      )}
    </_.Layout>
  );
};

export default Recipe;
