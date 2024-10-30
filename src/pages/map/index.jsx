// 라이브러리
import React, { useState } from "react";
import * as _ from "./style";
import ScreenMap from "../../components/ScreenMap";
import BottomSheet from "../../components/BottomSheet";

const Map = () => {
  const name = "파리바게뜨";
  const [location, setLocation] = useState("");
  return (
    <_.Map_Layout>
      <_.Here>
        <b>{name}</b>는 여기에 있어요!
      </_.Here>
      <ScreenMap keyword={name} onMount={(location) => setLocation(location)} />
      <BottomSheet name={name} store={location} />
    </_.Map_Layout>
  );
};

export default Map;
