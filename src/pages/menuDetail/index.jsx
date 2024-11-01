import React, { useEffect, useState } from "react";
import * as _ from "./style";
import LeftArrow from "../../assets/LeftArrow";
import { Product_Detail_Read } from "../../lib/apis/Product";
import { useNavigate, useParams } from "react-router-dom";
import { formatPrice } from "../../lib/utils/formatPrice";

const MenuDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [info, setInfo] = useState();
  const allergy = info?.allergy.split(",");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await Product_Detail_Read(params.id);
        setInfo(response);
      } catch (error) {
        console.error("에러:", error);
      }
    };
    fetchProducts();
  }, [params.id]);

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
      </_.Header>
      <_.Image src={info?.image} />
      <_.Top>
        <_.Company>{info?.companyName}</_.Company>
        <_.MenuOrRecipe>메뉴</_.MenuOrRecipe>
      </_.Top>
      <_.Info>
        <_.MenuName>{info?.menu}</_.MenuName>
        <_.Detail>{info?.category}</_.Detail>
        <_.Price>{formatPrice(info?.price)}</_.Price>
        <_.TagList>
          <_.Tag>{info?.isHot ? "#뜨거움" : "#뜨겁지 않음"}</_.Tag>
          <_.Tag>{info?.isSpicy ? "#매움" : "#맵지 않음"}</_.Tag>
        </_.TagList>
        <_.Line />
      </_.Info>
      <_.AlertList>
        <_.Alert>
          <_.Text>메뉴 소개</_.Text>
          <_.IntroduceBox>
            <_.Introduce>
              두툼한 소고기 패티의 깊은 풍미가 입안 가득 느껴지는, 한층 더
              특별한 햄버거를 만나보세요!
            </_.Introduce>
          </_.IntroduceBox>
        </_.Alert>
        <_.Alert>
          <_.Text>알레르기 정보</_.Text>
          <_.TagList>
            {allergy?.map((item, index) => (
              <_.Tag key={index}>{item}</_.Tag>
            ))}
          </_.TagList>
        </_.Alert>
        <_.Alert>
          <_.Text>기타 정보</_.Text>
          <_.TagList>
            <_.Tag>{info?.isHalal ? "할랄 허용" : "할랄 X"}</_.Tag>
            <_.Tag>{info?.isHalal ? "비건 허용" : "비건 X"}</_.Tag>
          </_.TagList>
        </_.Alert>
      </_.AlertList>
      <_.Buttons>
        <_.Button
          onClick={() => {
            navigate(`/map`, { state: { location: info?.companyName } });
          }}
          isRed={false}
        >
          가장 가까운 매장
        </_.Button>
        <_.Button
          onClick={() => {
            window.location.href = info?.link;
          }}
          isRed={true}
        >
          구매하러 가기!
        </_.Button>
      </_.Buttons>
    </_.Layout>
  );
};

export default MenuDetail;
