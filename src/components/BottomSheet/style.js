import { BOTTOM_SHEET_HEIGHT } from "../../config/constants";
import { motion } from "framer-motion";
import styled from "styled-components";

export const BottomSheet_Layout = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1;
  top: calc(100% - 90px);
  left: 0;
  right: 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #fff;
  height: ${BOTTOM_SHEET_HEIGHT}px;
`;

export const BottomSheet_Wrapper = styled.div`
  height: 48px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: relative;
  padding-top: 7px;
  padding-bottom: 4px;
`;

export const BottomSheet_Handle = styled.div`
  width: 50px;
  height: 2px;
  border-radius: 5px;
  background-color: #a5a5a5;
  margin: auto;
`;

export const BottomSheet_Container = styled.div`
  padding: 0 20px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;

export const Location = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const BoxList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 20px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: #f3f3f3;
  padding: 20px;
  border-radius: 3px;
`;

export const Big = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Small = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
