import React from "react";
import * as _ from "./style";
import RightArrow from "../../assets/RightArrow";
import { useNavigate } from "react-router-dom";

const Company = ({ id, url, title, desc, category, sale }) => {
  const navigate = useNavigate();
  return (
    <_.Layout
      onClick={() => {
        navigate(`/brand-detail/${id}`);
      }}
    >
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
