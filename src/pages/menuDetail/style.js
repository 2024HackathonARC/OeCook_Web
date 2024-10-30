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
  height: 350px;
  object-fit: cover;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
`;

export const Company = styled.p`
  color: #7a7a7a;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const MenuOrRecipe = styled.div`
  border-radius: 10px;
  background: #e54235;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 4px 20px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 20px 0;
`;

export const MenuName = styled.p`
  color: #424242;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Detail = styled.div`
  display: flex;
  gap: 10px;
`;

export const Category = styled.p`
  color: #4e4e4e;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const MenuType = styled.p`
  color: #a7a7a7;
  font-family: Pretendard;
  font-size: 14px;
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

export const TagList = styled.div`
  display: flex;
  gap: 15px;
`;

export const Tag = styled.div`
  padding: 4px 16px;
  border-radius: 6px;
  background: #e9e9e9;
  color: #e54235;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Line = styled.hr`
  color: #e9e9e9;
`;

export const AlertList = styled.div`
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Alert = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Text = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Buttons = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 300;
  width: 100%;
  padding: 40px;
  background-color: white;
  display: flex;
  gap: 20px;
`;

export const Button = styled.div`
  text-align: center;
  border-radius: 6px;
  width: 50%;
  padding: 14px 16px;
  border: 1px solid ${(props) => (props.isRed ? "#e54235" : "#bdbdbd")};
  background-color: ${(props) => (props.isRed ? "#e54235" : "none")};
  color: ${(props) => (props.isRed ? "#e9e9e9" : "#909090")};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`;

export const IntroduceBox = styled.div`
  width: 100%;
  height: max-content;
  padding: 25px;
  border-radius: 6px;
  background: #f3f3f3;
`;

export const Introduce = styled.p`
  line-height: 200%;
  width: 100%;
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;
