import styled from "styled-components";

export const MenuBar_Container = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 9999;
  bottom: 0px;
  right: 0;
  padding: 0 40px;
  background-color: #fff;
`;

export const Menubar_Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Menubar_Title = styled.div`
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  color: ${(props) => (props.select ? "#e54325" : "#a7a7a7")};
`;
