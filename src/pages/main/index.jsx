import React, { useState } from "react";
import * as _ from "./style";
import CategoryBar from "../../components/CategoryBar";
import Burger from "../../assets/Burger.webp";
import Coffee from "../../assets/Coffee.webp";
import IceCream from "../../assets/IceCream.webp";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import OeCook from "../../assets/OeCook";
import Menu from "../../components/Menu";
import MenuBar from "../../components/MenuBar";
import Header from "../../components/Header";

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTap = (index) => {
    setSelectedTab(index);
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
        <CategoryBar />
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
          에서 000님께 추천드려요!
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
          <Menu url={Coffee} title="커피커피" price="3,478원" brand="빚은" />
          <Menu url={Coffee} title="커피커피" price="3,478원" brand="빚은" />
          <Menu url={Coffee} title="커피커피" price="3,478원" brand="빚은" />
          <Menu url={Coffee} title="커피커피" price="3,478원" brand="빚은" />
          <Menu url={Coffee} title="커피커피" price="3,478원" brand="빚은" />
          <Menu url={Coffee} title="커피커피" price="3,478원" brand="빚은" />
          <Menu url={Coffee} title="커피커피" price="3,478원" brand="빚은" />
          <Menu url={Coffee} title="커피커피" price="3,478원" brand="빚은" />
        </_.List>
      </_.Content>
      <MenuBar />
    </_.Layout>
  );
};

export default Main;
