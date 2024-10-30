import React, { useEffect, useState } from "react";
import * as _ from "./style";
import LeftArrow from "../../assets/LeftArrow";
import SaleMenu from "../../components/SaleMenu";
import SpicyModal from "../../components/Modals/SpicyModal";
import TempModal from "../../components/Modals/TempModal";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Product_ReadByCategory,
  Recipe_ReadByCategory,
} from "../../lib/apis/Product";
import { formatPrice } from "../../lib/utils/formatPrice";

const Recipe = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [isSpicyModalOpen, setIsSpicyModalOpen] = useState(false);
  const [isTempModalOpen, setIsTempModalOpen] = useState(false);
  const [spicyPreference, setSpicyPreference] = useState(null);
  const [tempPreference, setTempPreference] = useState(null);
  const location = useLocation();
  const category = location.state?.category;
  const [productList, setProductList] = useState([]);
  const [recipeList, setRecipeList] = useState([]);

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

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (selectedTab === 1) {
          const response = await Product_ReadByCategory(
            category === "베이커리" ? "빵" : category
          );
          setProductList(response);
        } else if (selectedTab === 2) {
          const response = await Recipe_ReadByCategory(
            category === "베이커리" ? "빵" : category
          );
          setRecipeList(response);
        }
      } catch (error) {
        console.error("에러:", error);
      }
    };
    fetchProducts();
  }, [category, selectedTab]);

  return (
    <_.Layout>
      <_.Header>
        <div
          onClick={() => {
            navigate(-1);
          }}
          style={{ display: "flex", alignItems: "center" }}
        >
          <LeftArrow />
        </div>
        <_.Header_Title>{category}</_.Header_Title>
      </_.Header>
      <_.CategoryList>
        <_.Category
          onClick={openSpicyModal}
          isSelected={spicyPreference !== null}
        >
          맵기
        </_.Category>
        <_.Category
          onClick={openTempModal}
          isSelected={tempPreference !== null}
        >
          온도
        </_.Category>
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
        {selectedTab === 1
          ? productList.map((product, index) => (
              <SaleMenu
                key={index}
                id={product.id}
                image={product.image}
                title={product.menu}
                price={formatPrice(product.price)}
                company={product.companyName}
                isProduct={true}
              />
            ))
          : recipeList.map((product, index) => (
              <SaleMenu
                key={index}
                id={product.id}
                image={product.image}
                title={product.menu}
                price={formatPrice(product.price)}
                company={product.companyName}
                isProduct={false}
              />
            ))}
      </_.List>
      {isSpicyModalOpen && (
        <SpicyModal
          onClose={() => setIsSpicyModalOpen(false)}
          onPreferenceChange={(type) => setSpicyPreference(type)}
        />
      )}
      {isTempModalOpen && (
        <TempModal
          onClose={() => setIsTempModalOpen(false)}
          onPreferenceChange={(type) => setTempPreference(type)}
        />
      )}
    </_.Layout>
  );
};

export default Recipe;
