import styled from "styled-components";

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
`;

export const Language = styled.button`
  padding: 6px 12px;
  margin-right: 20px;
  color: #e54235;
  border: 1px solid #e54235;
  background-color: #fff;
`;

export const Content = styled.div`
  padding: 4px 0;
`;

export const Main_Slide = styled.div`
  position: relative;
  padding: 0 20px;
`;

export const Main_SlideImage = styled.img`
  width: 100%;
  filter: brightness(50%);
  border-radius: 10px;
  height: 160px;
`;

export const Main_SlideTitle = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 19px;
  font-weight: 600;
  white-space: nowrap;
`;

export const CustomCarousel = styled.div`
  margin-top: 20px;
  .carousel .control-dots .dot {
    background-color: rgba(255, 255, 255, 0.5);
    width: 6px;
    height: 6px;
    border-radius: 150px;
    margin: 0 4px;
  }

  .carousel .control-dots .dot.selected {
    background-color: #c8c8c8;
    width: 6px;
    height: 6px;
  }
`;

export const Explain = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 20px 20px 0;
`;

export const Taps = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
  padding: 0 20px;
`;

export const Tap = styled.div`
  padding: 5px 22px;
  border-radius: 6px 6px 0px 0px;
  color: ${(props) => (props.isSelected ? "#fff" : "#000")};
  background: ${(props) => (props.isSelected ? "#e54245" : "#fff")};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const List = styled.div`
  width: 100%;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: scroll;
  padding: 34px 20px 90px;
`;
