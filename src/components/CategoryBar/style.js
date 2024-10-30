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
  padding: 12px;
  border: 1px solid ${(props) => (props.isSelected ? "#e54235" : "#e9e9e9")};
  border-radius: 150px;
`;

export const Name = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 500;
`;
