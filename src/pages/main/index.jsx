import React, { useEffect, useState } from "react";
import * as _ from "./style";
import CategoryBar from "../../components/CategoryBar";
import Burger from "../../assets/Burger.webp";
import Coffee from "../../assets/Coffee.webp";
import IceCream from "../../assets/IceCream.webp";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import OeCook from "../../assets/OeCook";
import RecommendedMenu from "../../components/RecommendedMenu";
import Header from "../../components/Header";
import { Product_Read, Recipe_Read } from "../../lib/apis/Product";
import { User_Read } from "../../lib/apis/User";
import { formatPrice } from "../../lib/utils/formatPrice";

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState(1);
  const [productList, setProductList] = useState([]);
  const [recipeList, setRecipeList] = useState([]);
  const [name, setName] = useState("");
  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (selectedTab === 1) {
          const response = await Product_Read();
          setProductList(response);
        } else if (selectedTab === 2) {
          const response = await Recipe_Read();
          setRecipeList(response);
        }
      } catch (error) {
        console.error("에러:", error);
      }

      try {
        const response = await User_Read();
        setName(response.nickname);
      } catch (error) {
        console.error("에러:", error);
      }
    };
    fetchProducts();
  }, [selectedTab]);

  const handleTap = (index) => {
    setSelectedTab(index);
  };

  const toggleLanguage = () => {
    setIsEnglish((prev) => !prev);
  };

  const imageData = [
    {
      label: isEnglish
        ? "Top Sale, Best Burger Combo!"
        : "판매 1위, 쉐이크쉑 꿀조합 대공개!",
      alt: "image1",
      url: Burger,
    },
    {
      label: isEnglish
        ? "Free Regular Single on Family Size Order!"
        : "패밀리 사이즈 주문 시\n“싱글레귤러” 무료 증정!",
      alt: "image2",
      url: IceCream,
    },
    {
      label: isEnglish
        ? "Dunkin says it goes well with OOO!"
        : "던킨은 “OOO”이랑 잘 어울린대!",
      alt: "image3",
      url: Coffee,
    },
  ];

  const handleChange = (index) => setCurrentIndex(index);

  const renderSlides = () =>
    imageData.map((image) => (
      <_.Main_Slide key={image.alt}>
        <_.Main_SlideImage src={image.url} alt={image.alt} />
        <_.Main_SlideTitle>{image.label}</_.Main_SlideTitle>
      </_.Main_Slide>
    ));

  return (
    <_.Layout>
      <Header isEnglish={isEnglish} />
      <div style={{ display: "flex", justifyContent: "end" }}>
        <_.Language onClick={toggleLanguage}>
          {isEnglish ? "한국어" : "English"}
        </_.Language>
      </div>
      <_.Content>
        <CategoryBar isEnglish={isEnglish} selectedCategory={selectedTab} />
        <_.CustomCarousel>
          <Carousel
            showArrows={false}
            autoPlay={true}
            showThumbs={false}
            selectedItem={currentIndex}
            onChange={handleChange}
            showStatus={false}
          >
            {renderSlides()}
          </Carousel>
        </_.CustomCarousel>
        <_.Explain>
          <OeCook />
          {isEnglish
            ? ` recommended for you, ${name}!`
            : `에서 ${name}님께 추천드려요!`}
        </_.Explain>
        <_.Taps>
          <_.Tap isSelected={selectedTab === 1} onClick={() => handleTap(1)}>
            {isEnglish ? "Recommended Menu" : "추천 메뉴"}
          </_.Tap>
          <_.Tap isSelected={selectedTab === 2} onClick={() => handleTap(2)}>
            {isEnglish ? "Recommended Recipes" : "추천 레시피"}
          </_.Tap>
        </_.Taps>
        <_.List>
          {selectedTab === 1
            ? productList?.map((product) => (
                <RecommendedMenu
                  key={product.id}
                  id={product.id}
                  url={product.image}
                  title={product.menu}
                  price={formatPrice(product.price)}
                  brand={product.companyName}
                  isProduct={true}
                  isEnglish={isEnglish}
                />
              ))
            : recipeList?.map((product) => (
                <RecommendedMenu
                  key={product.id}
                  id={product.id}
                  url={product.image}
                  title={product.menu}
                  price={formatPrice(product.price)}
                  brand={product.companyName}
                  isProduct={false}
                  isEnglish={isEnglish}
                />
              ))}
        </_.List>
      </_.Content>
    </_.Layout>
  );
};

export default Main;
