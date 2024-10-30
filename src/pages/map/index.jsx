// 라이브러리
import React from "react";
import * as _ from "./style";
import ScreenMap from "../../components/ScreenMap";

const Map = () => {
  return (
    <_.Map_Layout>
      <ScreenMap keyword="파리바게뜨" />
    </_.Map_Layout>
  );
};

export default Map;
