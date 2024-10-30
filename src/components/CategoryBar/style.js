import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  width: 60px;
  height: 60px;
  border: 1px solid ${(props) => (props.isSelected ? "#e54235" : "#e9e9e9")};
  border-radius: 150px;
`;

export const Name = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 500;
`;
