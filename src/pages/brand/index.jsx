import React from "react";
import * as _ from "./style";
import IceCream from "../../assets/IceCream.webp";
import Header from "../../components/Header";
import MenuBar from "../../components/MenuBar";
import Company from "../../components/Company";

const Brand = () => {
  return (
    <_.Layout>
      <Header />
      <_.CategoryList>
        <_.Category>베이커리</_.Category>
        <_.Category>디저트</_.Category>
        <_.Category>외식/다이닝</_.Category>
        <_.Category>커피/음료</_.Category>
      </_.CategoryList>
      <_.Explain>
        <_.Explain_Span>K-food</_.Explain_Span>와 관련된 음식 회사
      </_.Explain>
      <_.List>
        <Company
          url={IceCream}
          title="빚은"
          desc="정성스레 빚은 떡"
          category="디저트"
          sale="떡"
        />
        <Company
          url={IceCream}
          title="빚은"
          desc="정성스레 빚은 떡"
          category="디저트"
          sale="떡"
        />
        <Company
          url={IceCream}
          title="빚은"
          desc="정성스레 빚은 떡"
          category="디저트"
          sale="떡"
        />
        <Company
          url={IceCream}
          title="빚은"
          desc="정성스레 빚은 떡"
          category="디저트"
          sale="떡"
        />
        <Company
          url={IceCream}
          title="빚은"
          desc="정성스레 빚은 떡"
          category="디저트"
          sale="떡"
        />
        <Company
          url={IceCream}
          title="빚은"
          desc="정성스레 빚은 떡"
          category="디저트"
          sale="떡"
        />
        <Company
          url={IceCream}
          title="빚은"
          desc="정성스레 빚은 떡"
          category="디저트"
          sale="떡"
        />
        <Company
          url={IceCream}
          title="빚은"
          desc="정성스레 빚은 떡"
          category="디저트"
          sale="떡"
        />
      </_.List>
      <MenuBar />
    </_.Layout>
  );
};

export default Brand;
