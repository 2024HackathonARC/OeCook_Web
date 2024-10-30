import React from "react";
import * as _ from "./style";
import LeftArrow from "../../assets/LeftArrow";
import Burger from "../../assets/Burger.webp";

const RecipeDetail = () => {
  return (
    <_.Layout>
      <_.Header>
        <LeftArrow />
      </_.Header>
      <_.Image src={Burger} />
      <_.Top>
        <_.Company>쉐이크쉑</_.Company>
        <_.MenuOrRecipe>레시피</_.MenuOrRecipe>
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
          <_.Text>레시피</_.Text>
          <_.RecipeBox>
            <ol>
              <_.Recipe>요아정 2인분을 시킨다.(중요)</_.Recipe>
              <_.Recipe>
                엄청 달달한 벌집꿀과 초코쉘, 치즈 큐브는 환상의 조합이기 때문에
                필수로 추가해준다.
              </_.Recipe>
              <_.Recipe>나머지는 개인의 취향대로 추가해주기.</_.Recipe>
              <_.Recipe>당뇨를 대비해 아메리카노를 준비한다.</_.Recipe>
              <_.Recipe>맛있게 먹어준다!</_.Recipe>
            </ol>
          </_.RecipeBox>
        </_.Alert>
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
        <_.Button isRed={true}>구매하러 가기!</_.Button>
      </_.Buttons>
    </_.Layout>
  );
};

export default RecipeDetail;
