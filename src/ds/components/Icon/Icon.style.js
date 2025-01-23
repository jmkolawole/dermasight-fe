import styled from 'styled-components';

export const IconWrapper = styled.i`
  min-width: ${(props) => props.$width}px;
  width: ${(props) => props.$width}px;
  min-height: ${(props) => props.$height}px;
  height: ${(props) => props.$height}px;
  align-items: center;
  display: inline-flex;
  background: ${(props) => props.$bg};
  border-radius: ${(props) => props.$radius}px;
  justify-content: center;

  & > svg {
    height: ${(props) => props.$height - props.$padding}px;
    width: ${(props) => props.$width - props.$padding}px;
  }

  & path,
  circle {
    fill: ${(props) => (props.$hasFill ? props.$color : '')};
    stroke: ${(props) => props.$color};
    stroke-width: ${(props) => props.$weight};
  }
`;
