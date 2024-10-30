import React from "react";
import * as _ from "./style";
import Header from "../../components/Header";
import MenuBar from "../../components/MenuBar";

const Brand = () => {
  return (
    <_.Layout>
      <Header />
      <MenuBar />
    </_.Layout>
  );
};

export default Brand;
