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
  display: flex;
  flex-direction: column;
  height: ${props => props.compact ? 'auto' : '100%'};
  position: relative;
  overflow-y: hidden;
  transition: height 0.3s ease;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 16px;
  }
`;

export const ResultHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0 20px;
  background-color: ${colors.shades[200]};
  position: sticky;
  top: 0;
  z-index: 10;
  
  @media (max-width: 768px) {
    padding: 20px 0 16px;
    flex-direction: column;
    gap: 12px;
    
    & > div:first-child {
      width: 100%;
      justify-content: space-between;
    }
  }
`;

export const ResultIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${colors.primary[500]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  margin-right: 12px;
  
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    font-size: 16px;
    margin-right: 8px;
  }
`;

export const ContentInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 30px;
  background-color: ${colors.shades[0]};
  border: 1px solid #e5e7eb;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  overflow-y: auto;
  flex: ${props => props.compact ? '0 0 auto' : '1'};
  margin-bottom: ${props => props.compact ? '20px' : '80px'}; /* Reduced margin when compact */
  padding-bottom: ${props => props.compact ? '20px' : '100px'}; /* Reduced padding when compact */
  transition: all 0.3s ease;
  min-height: ${props => props.compact ? 'auto' : '500px'};
  height: ${props => props.compact ? 'auto' : '100%'};
  max-height: ${props => props.compact ? '400px' : 'none'};
  
  @media (max-width: 768px) {
    padding: 20px 16px;
    gap: 12px;
    margin-bottom: ${props => props.compact ? '16px' : '70px'};
    padding-bottom: ${props => props.compact ? '16px' : '80px'};
    min-height: ${props => props.compact ? 'auto' : '400px'};
  }
`;

export const SectionCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  border-left: 4px solid ${props => props.borderColor || colors.primary[500]};
  overflow: visible;
  transition: margin-bottom 0.3s ease;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  cursor: pointer;
  user-select: none;
  background-color: ${props => props.isOpen ? 'rgba(0, 0, 0, 0.02)' : 'transparent'};
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
  
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const SectionContent = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: ${colors.neutral[700]};
  padding: ${props => props.isOpen ? '0 20px 20px' : '0 20px'};
  max-height: ${props => props.isOpen ? 'none' : '0'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  overflow: visible;
  transition: opacity 0.3s ease-in-out, padding 0.3s ease-in-out;
  white-space: pre-wrap;
  word-break: break-word;
  
  @media (max-width: 768px) {
    font-size: 14px;
    padding: ${props => props.isOpen ? '0 16px 16px' : '0 16px'};
  }
  
  @media print {
    display: block !important;
    max-height: none !important;
    height: auto !important;
    opacity: 1 !important;
    overflow: visible !important;
    padding: 0 20px 20px !important;
    visibility: visible !important;
  }
`;

export const AccordionIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  transition: transform 0.3s ease;
  color: ${colors.neutral[600]};
`;

export const SeverityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

export const SeverityScale = styled.div`
  display: flex;
  gap: 4px;
`;

export const SeverityDot = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => 
    props.active ? 
    (props.level >= 4 ? '#ef4444' : 
     props.level >= 3 ? '#f97316' : 
     props.level >= 2 ? '#facc15' : '#22c55e') : 
    '#e5e7eb'};
    
  @media (max-width: 768px) {
    width: 14px;
    height: 14px;
  }
`;

export const PrintButtonContainer = styled.div`
  position: ${props => props.compact ? 'relative' : 'fixed'};
  bottom: ${props => props.compact ? 'auto' : '20px'};
  width: 672px;
  display: flex;
  justify-content: flex-end;
  padding: 0 30px;
  box-sizing: border-box;
  z-index: 5;
  background: ${props => props.compact ? 'transparent' : 'linear-gradient(to top, ${colors.shades[200]} 60%, transparent)'};
  padding-top: ${props => props.compact ? '0' : '20px'};
  margin-top: ${props => props.compact ? '20px' : '0'};
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 16px;
    bottom: ${props => props.compact ? 'auto' : '16px'};
  }
  
  @media print {
    display: none;
  }
`;

export const PrintButton = styled.button`
  background-color: ${colors.primary[500]};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.2s;
  
  &:hover {
    background-color: ${colors.primary[600]};
    transform: translateY(-2px);
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 13px;
    width: 100%;
    justify-content: center;
  }
`;
