import React from "react";
import * as _ from "./style";
import RightArrow from "../../assets/RightArrow";

const Company = ({ url, title, desc, category, sale }) => {
  return (
    <_.Layout>
      <_.Image src={url} alt="메뉴 이미지" />
      <_.Content>
        <_.Left>
          <_.Title>{title}</_.Title>
          <_.Desc>{desc}</_.Desc>
          <_.Two>
            <_.Category>{category}</_.Category>
            <_.Sale>{sale}</_.Sale>
          </_.Two>
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

export default Company;
