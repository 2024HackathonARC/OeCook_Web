import styled from "styled-components";

export const Layout = styled.div`
  position: absolute;
  padding: 20px 15px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 10%;
  left: 4%;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
  color: #333;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const PreferenceButton = styled.button`
  padding: 10px 20px;
  border: 2px solid #bbb;
  border-radius: 20px;
  background-color: ${({ selected }) => (selected ? "#FFD1D1" : "transparent")};
  color: ${({ selected }) => (selected ? "#000" : "#888")};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    border-color: #ff8a8a;
  }
`;

export const Footer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: space-between;
`;

export const ResetButton = styled.div`
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  border: 1px solid #e9e9e9;
`;

export const CloseButton = styled.div`
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  border: 1px solid #e9e9e9;
`;
