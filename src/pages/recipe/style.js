import styled from "styled-components";

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  padding: 12px 24px;
`;

export const Header_Title = styled.p`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const CategoryList = styled.div`
  width: 100%;
  display: flex;
  gap: 14px;
  padding: 10px 24px;
`;

export const Category = styled.div`
  border-radius: 10px;
  border: 1px solid ${(props) => (props.isSelected ? "#e54235" : "#a7a7a7")};
  background: #fff;
  padding: 3px 22px;
  color: ${(props) => (props.isSelected ? "#e54235" : "#a7a7a7")};
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
`;

export const Taps = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
  padding: 0 20px;
`;

export const Tap = styled.div`
  padding: 5px 22px;
  border-radius: 6px 6px 0px 0px;
  color: ${(props) => (props.isSelected ? "#fff" : "#000")};
  background: ${(props) => (props.isSelected ? "#e54245" : "#fff")};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
`;

export const List = styled.div`
  width: 100%;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  overflow-y: scroll;
  padding: 24px 20px 90px;
`;
