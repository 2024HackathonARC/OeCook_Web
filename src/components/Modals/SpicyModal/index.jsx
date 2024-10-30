import React, { useState } from "react";
import * as _ from "./style";

const SpicyModal = ({ onClose, onPreferenceChange }) => {
  const [preference, setPreference] = useState(null);

  const handlePreference = (type) => {
    setPreference(type);
    onPreferenceChange(type);
  };

  const handleReset = () => {
    setPreference(null);
    onPreferenceChange(null);
  };

  return (
    <_.Layout>
      <_.Title>오늘의 음식 선호를 선택해 주세요</_.Title>
      <_.ButtonWrapper>
        <_.PreferenceButton
          selected={preference === "spicy"}
          onClick={() => handlePreference("spicy")}
        >
          매운 음식
        </_.PreferenceButton>
        <_.PreferenceButton
          selected={preference === "notSpicy"}
          onClick={() => handlePreference("notSpicy")}
        >
          안매운 음식
        </_.PreferenceButton>
      </_.ButtonWrapper>
      <_.Footer>
        <_.ResetButton onClick={handleReset}>초기화 ↻</_.ResetButton>
        <_.CloseButton onClick={onClose}>닫기</_.CloseButton>
      </_.Footer>
    </_.Layout>
  );
};

export default SpicyModal;
