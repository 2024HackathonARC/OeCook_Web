import styled from "styled-components";

export const Layout = styled.div`
  width: 100vw;
  height: max-content;
  display: flex;
  flex-direction: column;
  padding-bottom: 125px;
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  padding: 12px 24px;
`;

export const Image = styled.img`
  width: 100%;
  height: 115px;
  object-fit: cover;
`;

export const Company = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 20px 0;
`;

export const Category = styled.p`
  color: #4e4e4e;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Price = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #e9e9e9;
`;

export const Text = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Detail = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
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
`;

export const List = styled.div`
  width: 100%;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: scroll;
  padding: 34px 20px 0;
`;
