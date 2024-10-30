// 라이브러리
import React, { useState } from "react";
import * as _ from "./style";
import ScreenMap from "../../components/ScreenMap";
import BottomSheet from "../../components/BottomSheet";
import { useLocation } from "react-router-dom";

const Map = () => {
  const location = useLocation();
  const name = location.state?.location;
  const [address, setAddress] = useState("");

  return (
    <_.Map_Layout>
      <_.Here>
        <b>{name}</b>는 여기에 있어요!
      </_.Here>
      <ScreenMap keyword={name} onMount={(location) => setAddress(location)} />
      <BottomSheet name={name} store={address} />
    </_.Map_Layout>
  );
};

export default Map;
