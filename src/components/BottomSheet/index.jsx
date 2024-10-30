import React from "react";
import * as _ from "./style";
import { useBottomSheet } from "../../hooks/useBottomSheet";

const BottomSheet = ({ store, name }) => {
  const { sheet, content } = useBottomSheet();

  return (
    <_.BottomSheet_Layout ref={sheet}>
      <_.BottomSheet_Wrapper>
        <_.BottomSheet_Handle />
      </_.BottomSheet_Wrapper>
      <_.BottomSheet_Container ref={content}>
        <_.Location>{name}</_.Location>
        <_.BoxList>
          <_.Box>
            <_.Big>현재 위치</_.Big>
            <_.Small>대전광역시 유성구 계룡로 127</_.Small>
          </_.Box>
          <_.Box>
            <_.Big>매장 위치</_.Big>
            <_.Small>{store}</_.Small>
          </_.Box>
        </_.BoxList>
      </_.BottomSheet_Container>
    </_.BottomSheet_Layout>
  );
};

export default BottomSheet;
