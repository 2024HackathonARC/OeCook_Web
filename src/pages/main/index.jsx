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
import {
  Product_Read,
  Product_ReadByCategory,
  Recipe_Read,
} from "../../lib/apis/Product";
import { User_Read } from "../../lib/apis/User";
import { formatPrice } from "../../lib/utils/formatPrice";

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState(1);
  const [productList, setProductList] = useState([]);
  const [recipeList, setRecipeList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (selectedTab === 1) {
          const response = selectedCategory
            ? await Product_ReadByCategory(
                selectedCategory === "베이커리" ? "빵" : selectedCategory
              )
            : await Product_Read();
          setProductList(response);
        } else if (selectedTab === 2) {
          const response = await Recipe_Read();
          setRecipeList(response);
        }
        console.log(recipeList);
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
  }, [selectedTab, selectedCategory, recipeList]);

  const handleTap = (index) => {
    setSelectedTab(index);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const imageData = [
    { label: "판매 1위, 쉐이크쉑 꿀조합 대공개!", alt: "image1", url: Burger },
    {
      label: "패밀리 사이즈 주문 시\n“싱글레귤러” 무료 증정!",
      alt: "image2",
      url: IceCream,
    },
    { label: "던킨은 “OOO”이랑 잘 어울린대!", alt: "image3", url: Coffee },
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
      <Header />
      <_.Content>
        <CategoryBar
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
        />
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
          에서 {name}님께 추천드려요!
        </_.Explain>
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
            ? productList?.map((product) => (
                <RecommendedMenu
                  key={product.id}
                  id={product.id}
                  url={product.image}
                  title={product.menu}
                  price={formatPrice(product.price)}
                  brand={product.companyName}
                  isProduct={true}
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
                />
              ))}
        </_.List>
      </_.Content>
    </_.Layout>
  );
};

export default Main;
