import styled from "styled-components";

export const Layout = styled.div`
  width: 166px;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Image = styled.img`
  width: 100%;
  height: 182px;
  object-fit: cover;
  border-radius: 8px;
`;

export const Title = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.p`
  color: #9c9c9c;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Company = styled.p`
  color: #e54235;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
