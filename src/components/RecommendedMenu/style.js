import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  border-radius: 6px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.07);
  position: relative;
`;

export const Image = styled.img`
  width: 85px;
  height: 94.5px;
  min-height: 94.5px;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 13px 12px 12px 19px;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 85px);
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const Title = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
`;

export const Price = styled.p`
  color: #9c9c9c;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Brand = styled.p`
  color: #e54235;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Right = styled.div`
  position: absolute;
  bottom: 12px;
  right: 9px;
`;

export const Detail = styled.p`
  color: #717171;
  text-align: right;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
`;
