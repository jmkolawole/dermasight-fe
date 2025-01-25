import styled from 'styled-components';
import {colors} from '../../utils/colors';

export const TabContainer = styled.div`
  display: flex;

  & > div {
    width: ${(props) => props.$width}px;
    height: ${(props) => props.$height}px;
  }
`;


export const TabItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px ${colors.neutral[200]};
  border-left: unset;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background-color: ${(props) =>
    props.$active ? colors.primary[1000] : colors.shades[0]};
  color: ${(props) =>
    props.$active ? colors.shades[0] : colors.primary[1000]};

  &:first-of-type {
    border-left: solid 1px ${colors.neutral[200]};
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
  }

  &:last-of-type {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  &:hover {
    background-color: ${colors.primary[1000]};

    & p {
      color: ${colors.shades[0]} !important;
    }
  }
`;



