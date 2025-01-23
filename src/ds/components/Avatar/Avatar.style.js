import styled from 'styled-components';
import {colors} from '../../utils/colors';

export const AvatarContainer = styled.div`
  height: ${(props) => props.$size}px;
  width: ${(props) => props.$size}px;
  min-height: ${(props) => props.$size}px;
  min-width: ${(props) => props.$size}px;
  border-radius: ${(props) => props.$radius}%;
  background: ${colors.primary[1100]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props.$size <= 30 ? '2px' : '0px')};
`;

export const AvatarImage = styled.img`
  height: ${(props) => props.$size}px;
  width: ${(props) => props.$size}px;
  min-width: ${(props) => props.$size}px;
  min-height: ${(props) => props.$size}px;
  border-radius: ${(props) => props.$radius}%;
  object-fit: cover;
  object-position: center;
  opacity: ${(props) => (props.$disabled ? '0.5' : '1')};
`;
