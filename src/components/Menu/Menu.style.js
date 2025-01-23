import {styled} from 'styled-components';
import {colors} from '../../ds';

export const Container = styled.div`
  position: absolute;
  right: ${props => props.$right};
  display: flex;
  flex-direction: column;
  background-color: ${colors.shades[0]};
  box-shadow: 0px 1px 5px 0px ${colors.neutral[400]};
  border-radius: 8px;
  width: ${props => props.$width};

  & > div:last-of-type {
    border-top: 1px solid ${colors.neutral[300]};
  }

  & > div {
    padding: 10px 15px 10px 15px;
    cursor: pointer;
  }

  & > div:hover {
    background-color: ${colors.primary[100]};
  }
  & > div:last-child:hover {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px
  }
  & > div:first-child:hover {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px
  }
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  cursor: ${(props) =>
    props.$disabled ? 'not-allowed !important' : 'cursor !important'};

  & > div {
    padding-top: 3px;
  }
`;
