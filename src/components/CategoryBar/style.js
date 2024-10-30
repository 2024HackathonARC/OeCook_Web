import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const Icon = styled.div`
  padding: 12px;
  border: 1px solid #e9e9e9;
  border-radius: 150px;
`;

export const Name = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 500;
`;
