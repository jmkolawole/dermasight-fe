import styled from 'styled-components';
import { Button, colors } from '../../ds';

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
  flex-direction: column;
  gap: 10px;
  padding: 25px;
  background-color: ${colors.shades[0]};
  border: 1px solid #e5e7eb;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
`;

export const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ImagePreview = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${colors.primary[500]};
`;

export const FileInput = styled.input`
  display: none;
`;

export const SaveButton = styled(Button)`
  background-color: ${colors.primary[500]};
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${colors.primary[600]};
  }
`;
