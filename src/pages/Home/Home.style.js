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
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 48px;
  width: 100%;
  align-items: center;
`;

export const SymptomsWrapper = styled.div`
  display: flex;
  padding-top: 32px;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  height: 236px !important;
  flex-direction: column;
  gap: 5px;
  padding: 25px;
  background-color: ${colors.shades[0]};
  border: 1px solid #e5e7eb;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Adds a soft shadow */
  border-radius: 6px;

  & textarea {
    height: 136px !important;
  }
`;

// Image
export const ImageContainer = styled.div`
  background-color: ${colors.shades[0]};
  border: 1px solid #e5e7eb;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Adds a soft shadow */
  height: 220px;
  padding: 33px;
`;

export const ImageWrapper = styled.div`
  border: 2px dashed #ccc;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  transition: border-color 0.2s ease-in-out;
  &:hover {
    border-color: #5dc3c2;
  }
  height: calc(100% - 20px - 25px);
`;

export const DragActive = styled.p`
  color: #5dc3c2;
  font-size: 16px;
`;

export const Icon = styled.div`
  font-size: 40px;
  color: #5dc3c2;
`;

export const Text = styled.p`
  font-size: 18px;
  color: #666;
  margin: 0;
  font-weight: 400;
  color: rgb(31 41 55 / 1);
  opacity: 0.8;
`;

export const OrText = styled.p`
  font-size: 14px;
  color: #999;
  margin: 8px 0;
`;

export const BrowseButton = styled.button`
  background-color: #4fd1c5;
  color: white;
  padding: 8px 24px;
  border: none;
  height: 40px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #4ba8a8;
  }
`;

export const Base64Container = styled.div`
  margin-top: 20px;
  text-align: left;
`;

export const Base64Heading = styled.h3`
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
`;

export const Base64Textarea = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  resize: none;
  background: #f9f9f9;
`;

export const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingText = styled.p`
  margin-top: 16px;
  color: #555;
  font-size: 16px;
`;

export const ImagePreview = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 0.5rem;
`;

export const HistorySection = styled.div`
  display: flex;
  gap:20px;
  align-items: flex-start; /* Ensures content aligns at the top */
  flex-direction: column;
  justify-content: start;
  padding-top: 25px;
`;

export const HistoryContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.shades[0]};
  border: 1px solid #e5e7eb;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Adds a soft shadow */
  width: 100%;
  padding: 25px;
  box-sizing: border-box;
  max-height: 400px;
  overflow-y: auto;
`;


export const HistoryContentInner = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;


export const HistoryItem = styled.div`
  display: flex;
  width: 100%;
  gap: 6px;
  align-items: center;
  cursor: pointer;
  
  & :hover {
    background-color: ${colors.neutral[200]};
  }
`;

export const HistoryItemImg = styled.div`
  width: 50px;
`;

export const HistoryItemContent = styled.div`
  display: flex;
  width: 100%;
  gap: 6px;
`;

