import {styled} from 'styled-components';

export const ColorsContainer = styled.div`
  & > h2,
  h3 {
    margin-bottom: 5px;
  }

  & > p {
    font-size: 12px;
    margin: 0;
  }
`;

export const ColorGroup = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  border: solid;
  padding: 5px;
  margin-bottom: 30px;

  &:first-of-type {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Color = styled.div`
  height: 50px;
  width: 100%;
  background: ${(props) => props.$color};
  border: solid;
  position: relative;
  cursor: pointer;

  & > p {
    font-size: 12px;
    font-weight: 600;
    margin: 0;
    background: #ffffff9d;
    width: fit-content;
    padding: 2px;
    box-shadow: 0 0 1px 1px #000000;
    position: absolute;
  }
`;
