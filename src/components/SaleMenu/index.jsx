import React from "react";
import * as _ from "./style";

const SaleMenu = ({ image, title, price, company }) => {
  return (
    <_.Layout>
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
