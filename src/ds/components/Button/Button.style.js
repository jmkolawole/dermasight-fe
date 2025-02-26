import {styled} from 'styled-components';
import {buttonSize} from './Button.utils';
import {colors} from '../..';

const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  gap: 4px;
  align-items: center;
  transition: all 0.3s;
  border: unset;
  font-weight: 500;
  cursor: pointer;
  width: ${(props) => props.$width};
  border-radius: ${(props) => props.$radius}px;
  font-family: GeneralSans;
  ${(props) => buttonSize(props.$size)};

  &:focus,
  &:focus-visible {
    border: unset;
    outline: unset;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const Primary = styled(Button)`
  background: ${colors.primary[1000]};
  color: ${colors.shades[0]};

  &:hover {
    background: ${colors.primary[1100]};
  }

  &:focus,
  &:focus-visible {
    background: ${colors.primary[1100]};
  }

  &:disabled {
    background: ${colors.neutral[300]};
  }
`;

export const Secondary = styled(Button)`
  color: ${colors.primary[600]};
  background: ${colors.primary[50]};

  & path {
    transition: all 0.3s;
  }

  &:hover {
    background: ${colors.primary[1000]};
    color: ${colors.shades[0]};

    & path {
      stroke: ${colors.shades[0]};
    }
  }

  &:focus,
  &:focus-visible {
    background: ${colors.primary[400]};
    color: ${colors.shades[0]};

    & path {
      stroke: ${colors.shades[0]};
    }
  }

  &:disabled {
    background: ${colors.neutral[300]} !important;
    color: ${colors.shades[0]} !important;

    & path {
      stroke: ${colors.shades[0]};
    }
  }
`;

export const Danger = styled(Button)`
  color: ${colors.shades[0]};
  background: ${colors.destructive[600]};

  &:hover {
    background: ${colors.destructive[500]};
  }

  &:focus,
  &:focus-visible {
    background: ${colors.destructive[700]};
  }

  &:disabled {
    background: ${colors.neutral[300]};
  }
`;

export const Success = styled(Button)`
  color: ${colors.shades[0]};
  background: ${colors.success[600]};

  &:hover {
    background: ${colors.success[500]};
  }

  &:focus,
  &:focus-visible {
    background: ${colors.success[700]};
  }

  &:disabled {
    background: ${colors.neutral[300]};
  }
`;

export const Warning = styled(Button)`
  color: ${colors.neutral[900]};
  background: ${colors.warning[500]};

  &:hover {
    background: ${colors.warning[400]};
  }

  &:focus,
  &:focus-visible {
    background: ${colors.warning[600]};
  }

  &:disabled {
    background: ${colors.neutral[300]};
  }
`;

export const OutlinePrimary = styled(Button)`
  color: ${colors.primary[600]};
  background: ${colors.shades[0]};
  border: solid 1px ${colors.primary[600]};

  &:hover {
    background: ${colors.primary[400]};
    color: ${colors.shades[0]};
  }

  &:focus,
  &:focus-visible {
    background: ${colors.primary[900]};
    border: solid 1px ${colors.primary[900]};
    color: ${colors.shades[0]};
  }

  &:disabled {
    opacity: 0.4 !important;
    color: ${colors.primary[600]};
    background: ${colors.shades[0]} !important;
  }
`;

export const OutlineGray = styled(Button)`
  color: ${colors.neutral[700]};
  background: ${colors.shades[0]};
  border: solid 1px ${colors.neutral[300]};

  &:hover {
    background: ${colors.neutral[100]};
    border: solid 1px ${colors.neutral[300]};
  }

  &:focus,
  &:focus-visible {
    background: ${colors.neutral[200]};
    border: solid 1px ${colors.neutral[300]};
  }

  &:disabled {
    opacity: 0.5;
  }
`;
