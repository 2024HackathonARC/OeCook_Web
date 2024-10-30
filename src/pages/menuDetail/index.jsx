import React from "react";
import * as _ from "./style";
import LeftArrow from "../../assets/LeftArrow";
import Burger from "../../assets/Burger.webp";

const MenuDetail = () => {
  return (
    <_.Layout>
      <_.Header>
        <LeftArrow />
      </_.Header>
      <_.Image src={Burger} />
      <_.Top>
        <_.Company>쉐이크쉑</_.Company>
        <_.MenuOrRecipe>메뉴</_.MenuOrRecipe>
      </_.Top>
      <_.Info>
        <_.MenuName>개쉑버거</_.MenuName>
        <_.Detail>
          <_.Category>외식/다이닝</_.Category>
          <_.MenuType>샐러드</_.MenuType>
        </_.Detail>
        <_.Price>13,500원</_.Price>
        <_.TagList>
          <_.Tag>#뜨거움</_.Tag>
          <_.Tag>#매움</_.Tag>
        </_.TagList>
        <_.Line />
      </_.Info>
      <_.AlertList>
        <_.Alert>
          <_.Text>알레르기 정보</_.Text>
          <_.TagList>
            <_.Tag>견과류</_.Tag>
            <_.Tag>과일</_.Tag>
            <_.Tag>계란</_.Tag>
          </_.TagList>
        </_.Alert>
        <_.Alert>
          <_.Text>기타 정보</_.Text>
          <_.TagList>
            <_.Tag>할랄 허용</_.Tag>
            <_.Tag>비건 허용</_.Tag>
          </_.TagList>
        </_.Alert>
      </_.AlertList>
      <_.Buttons>
        <_.Button isRed={false}>가장 가까운 매장</_.Button>
        <_.Button isRed={true}>구매하러 가기!</_.Button>
      </_.Buttons>
    </_.Layout>
  );
};

export default MenuDetail;
