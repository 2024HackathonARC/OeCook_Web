import React, { useEffect, useState } from "react";
import * as _ from "./style";
import LeftArrow from "../../assets/LeftArrow";
import { useNavigate, useParams } from "react-router-dom";
import RecommendedMenu from "../../components/RecommendedMenu";
import { formatPrice } from "../../lib/utils/formatPrice";
import { Company_Detail_Read } from "../../lib/apis/Company";

const BrandDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(1);
  const handleTap = (index) => {
    setSelectedTab(index);
  };
  const [info, setInfo] = useState();
  const productList = [];
  const recipeList = [];

  info?.products.forEach((product) => {
    if (product.isProduct) {
      productList.push(product);
    } else {
      recipeList.push(product);
    }
  });

  console.log(productList);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (selectedTab === 1) {
          const response = await Company_Detail_Read(params.id);
          setInfo(response);
          console.log(response);
        }
      } catch (error) {
        console.error("에러:", error);
      }
    };
    fetchProducts();
  }, [selectedTab, params.id]);

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
      <_.Info>
        <_.Company>{info?.name}</_.Company>
        <_.Category>{info?.category}</_.Category>
        <_.Line />
        <_.Text>상세 정보</_.Text>
        <_.Detail>{info?.explanation}</_.Detail>
      </_.Info>
      <_.Taps>
        <_.Tap isSelected={selectedTab === 1} onClick={() => handleTap(1)}>
          판매 메뉴
        </_.Tap>
        <_.Tap isSelected={selectedTab === 2} onClick={() => handleTap(2)}>
          커스텀 레시피
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
    </_.Layout>
  );
};

export default BrandDetail;
