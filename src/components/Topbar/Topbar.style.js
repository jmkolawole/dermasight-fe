import styled from 'styled-components';
import { colors } from '../../ds';


export const Container = styled.div`
  display: flex;
  padding: 12px 32px;
  justify-content: space-between;
  align-items: center;
  position: sticky;
`;

export const MenuContainer = styled.div`
  background-color: ${colors.shades[0]};
  border: 1px solid ${colors.neutral[200]};
  border-radius: 8px;
  z-index: 5;
  position: fixed;
  top: 50px;
  right: 32px;
`;

export const MenuItemsContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 16px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.primary[100]};
  }
  &:last-of-type {
    border-top: 1px solid ${colors.neutral[200]};
  }
`;