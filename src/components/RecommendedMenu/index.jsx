import React from "react";
import * as _ from "./style";
import { useNavigate } from "react-router-dom";
import RightArrow from "../../assets/RightArrow";

const RecommendedMenu = ({ isProduct, id, url, title, price, brand }) => {
  const navigate = useNavigate();
  return (
    <_.Layout>
      <_.Image src={url} alt="메뉴 이미지" />
      <_.Content>
        <_.Left>
          <_.Title>{title}</_.Title>
          <_.Price>{price}</_.Price>
          <_.Brand>{brand}</_.Brand>
        </_.Left>
        <_.Right>
          <_.Detail
            onClick={() => {
              if (isProduct) {
                navigate(`/menu-detail/${id}`);
              } else {
                navigate(`/recipe-detail/${id}`);
              }
            }}
          >
            자세히 보기 <RightArrow />
          </_.Detail>
        </_.Right>
      </_.Content>
    </_.Layout>
  );
};

export default RecommendedMenu;
