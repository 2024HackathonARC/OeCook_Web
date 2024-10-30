import React from "react";
import * as _ from "./style";
import Burger from "../../assets/Burger.webp";

const SaleMenu = () => {
  return (
    <_.Layout>
      <_.Image src={Burger} />
      <_.Title>오색무지개바람떡</_.Title>
      <_.Info>
        <_.Price>11,500원</_.Price>
        <_.Company>빚은</_.Company>
      </_.Info>
    </_.Layout>
  );
};

export default SaleMenu;
