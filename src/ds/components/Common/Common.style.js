import styled from 'styled-components';
import {colors, sizes} from '../..';

const inputSize = (size = 'md') => {
  if (size === 'sm') return `font-size: ${sizes.s14}`;
  if (size === 'md') return `font-size: ${sizes.s16}`;
  if (size === 'lg') return `font-size: ${sizes.s18}`;
};

export const InputError = styled.p`
  color: ${colors.destructive[700]};
  font-size: ${sizes.s14};
`;

export const InputLabel = styled.p`
  color: ${(props) => (props.$disabled ? colors.neutral[600] : 'inherit')};
  ${(props) => inputSize(props.$size)};

  ${(props) =>
    props.$required
      ? `&::after {
          content: ' *';
          color: ${colors.destructive[500]}
        }`
      : ''}
`;
