import { createGlobalStyle } from 'styled-components';
import { fonts, colors, styleObjToStr } from './index';

// Normal fonts
import GeneralSansVariableFontTTF from '../assets/fonts/GeneralSans/GeneralSans-Variable.ttf';
import GeneralSansVariableFontWOFF from '../assets/fonts/GeneralSans/GeneralSans-Variable.woff';
import GeneralSansVariableFontWOFF2 from '../assets/fonts/GeneralSans/GeneralSans-Variable.woff2';

// Italic fonts
import GeneralSansVariableItalicFontTTF from '../assets/fonts/GeneralSans/GeneralSans-VariableItalic.ttf';
import GeneralSansVariableItalicFontWOFF from '../assets/fonts/GeneralSans/GeneralSans-VariableItalic.woff';
import GeneralSansVariableItalicFontWOFF2 from '../assets/fonts/GeneralSans/GeneralSans-VariableItalic.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GeneralSans';
    src: url(${GeneralSansVariableFontWOFF2}) format('woff2'),
      url(${GeneralSansVariableFontWOFF}) format('woff'),
      url(${GeneralSansVariableFontTTF}) format('truetype');
    font-weight: 200 700;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'GeneralSans-Italic';
    src: url(${GeneralSansVariableItalicFontWOFF2}) format('woff2'),
      url(${GeneralSansVariableItalicFontWOFF}) format('woff'),
      url(${GeneralSansVariableItalicFontTTF}) format('truetype');
    font-weight: 200 700;
    font-display: swap;
    font-style: italic;
  }

  :root {
    --toastify-icon-color-error: ${colors.destructive[600]};
    --toastify-color-progress-error: ${colors.destructive[600]};
    font-family: GeneralSans !important;
    color: ${colors.neutral[900]};
    background-color: ${colors.shades[0]};
  }

  body {
    margin: 0;
  }

  h1 {
    margin: 0;
    ${styleObjToStr(fonts.heading.h1)}
  } 
  h2 {
    margin: 0;
    ${styleObjToStr(fonts.heading.h2)}
  } 
  h3 {
    margin: 0;
    ${styleObjToStr(fonts.heading.h3)}
  } 
  h4 {
    margin: 0;
    ${styleObjToStr(fonts.heading.h4)}
  } 
  h5 {
    margin: 0;
    ${styleObjToStr(fonts.heading.h5)}
  } 
  h6 {
    margin: 0;
    ${styleObjToStr(fonts.heading.h6)}
  } 
  p, a {
    text-decoration: none;
    margin: 0;
    ${styleObjToStr(fonts.p.md)}
  }
`;

export default GlobalStyle;
