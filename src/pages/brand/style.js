import styled from "styled-components";

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const CategoryList = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  gap: 5px;
  padding: 20px 10px;
`;

export const Category = styled.div`
  border-radius: 10px;
  border: 1px solid #a7a7a7;
  background: #fff;
  padding: 3px 14px;
  color: #a7a7a7;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
`;

export const Explain = styled.p`
  padding: 0 20px;
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Explain_Span = styled.span`
  color: #e54325;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const List = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 20px 90px;
`;
