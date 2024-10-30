import React from "react";
import * as _ from "./style";
import RightArrow from "../../assets/RightArrow";

const RecommendedMenu = ({ url, title, price, brand }) => {
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
          <_.Detail>
            자세히 보기 <RightArrow />
          </_.Detail>
        </_.Right>
      </_.Content>
    </_.Layout>
  );
};

export default RecommendedMenu;
