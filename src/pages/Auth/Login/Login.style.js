import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: 12px;
`;

export const LoginForm = styled.form`
  & > button:first-of-type {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  & > button:last-of-type {
    display: flex;
    gap: 12px;
  }
`;

export const Footer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const WarningIcon = styled.img`
  height: 49px;
`;
