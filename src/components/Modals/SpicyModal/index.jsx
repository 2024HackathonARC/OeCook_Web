import React, { useState, useRef, useEffect } from "react";
import * as _ from "./style";

const SpicyModal = ({ onClose }) => {
  const [preference, setPreference] = useState(null);
  const modalRef = useRef();

  const handlePreference = (type) => {
    setPreference(type);
  };

  const handleReset = () => {
    setPreference(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <_.Layout ref={modalRef}>
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
