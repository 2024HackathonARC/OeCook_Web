import React from "react";
import * as _ from "./style";
import { useNavigate } from "react-router-dom";

const SaleMenu = ({ id, isProduct, image, title, price, company }) => {
  const navigate = useNavigate();
  return (
    <_.Layout
      onClick={() => {
        if (isProduct) {
          navigate(`/menu-detail/${id}`);
        } else {
          navigate(`/recipe-detail/${id}`);
        }
      }}
    >
      <_.Image src={image} />
      <_.Title>{title}</_.Title>
      <_.Info>
        <_.Price>{price}</_.Price>
        <_.Company>{company}</_.Company>
      </_.Info>
    </_.Layout>
  );
};

export default SaleMenu;
