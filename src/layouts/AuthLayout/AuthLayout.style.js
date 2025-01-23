import styled from 'styled-components';
import {colors} from '../../ds';


export const Container = styled.div`
  background: ${colors.shades[0]};
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  width: 460px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;

  @media (max-width: 767px) {
    width: 85%;
  }
`;
