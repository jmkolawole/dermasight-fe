import styled from 'styled-components';
import {colors} from '../../ds';

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: ${colors.shades[0]};
`;

export const Loader = styled.i`
  position: relative;
  transform: scale(1);
  width: 365px;
  display: block;
  box-sizing: border-box;
  height: 5px;
  border-radius: 4px;

  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    height: 5px;
    position: absolute;
    border-radius: 4px;
    background: ${colors.primary[600]};
    animation: loadbar 1.5s cubic-bezier(0, 0, 0.58, 1) infinite;
  }

  @keyframes loadbar {
    0%,
    to {
      left: 0;
      right: 80%;
    }
    25%,
    75% {
      left: 0;
      right: 0;
    }
    50% {
      left: 80%;
      right: 0;
    }
  }
`;
