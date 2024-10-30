// 라이브러리
import React, { useState } from "react";
import * as _ from "./style";
import ScreenMap from "../../components/ScreenMap";
import BottomSheet from "../../components/BottomSheet";
import { useLocation, useNavigate } from "react-router-dom";
import LeftArrow from "../../assets/LeftArrow";

const Map = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const name = location.state?.location;
  const [address, setAddress] = useState("");

  return (
    <_.Map_Layout>
      <_.Header>
        <div
          onClick={() => {
            navigate(-1);
          }}
          style={{ display: "flex", alignItems: "center" }}
        >
          <LeftArrow />
        </div>
      </_.Header>
      <_.Here>
        <b>{name}</b>는 여기에 있어요!
      </_.Here>
      <ScreenMap keyword={name} onMount={(location) => setAddress(location)} />
      <BottomSheet name={name} store={address} />
    </_.Map_Layout>
  );
};

export default Map;
