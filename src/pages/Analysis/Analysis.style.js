import styled from 'styled-components';
import {colors} from '../../ds';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 72px);
  overflow: hidden;
  background-color: ${colors.shades[200]};
`;

export const Content = styled.div`
  width: 672px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 20px;
`;

export const ContentInner = styled.div`
  display: flex;
  height: 236px !important;
  flex-direction: column;
  gap: 5px;
  padding: 25px;
  background-color: ${colors.shades[0]};
  border: 1px solid #e5e7eb;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Adds a soft shadow */
  border-radius: 6px;
`;
