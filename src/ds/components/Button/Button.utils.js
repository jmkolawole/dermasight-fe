import {startCase} from 'lodash';
import {sizes} from '../..';
import {styleObjToStr} from '../../utils/functions';

export const buttonVariants = [
  'primary',
  'secondary',
  'danger',
  'warning',
  'outline-primary',
  'outline-gray',
  'success',
];

// Compose button style based on its size
export const buttonSize = (size) => {
  let sizeStyle = {
    'font-size': sizes.s16,
    padding: '0 16px',
    height: '44px',
    'letter-spacing': '-0.096px',
  };

  switch (size) {
    case 'sm':
      sizeStyle = {
        'font-size': sizes.s14,
        padding: '0 12px',
        height: '40px',
        'letter-spacing': '-0.084px',
      };
      break;

    case 'lg':
      sizeStyle = {
        ...sizeStyle,
        padding: '0 78px',
        height: '48px',
      };
      break;

    case 'xl':
      sizeStyle = {
        ...sizeStyle,
        padding: '0 78px',
        height: '64px',
      };
      break;

    // Medium
    default:
      break;
  }

  return styleObjToStr(sizeStyle);
};

/**
 * Use button variant to form styled component name
 * @param {string} variant
 * @return {string}
 */
export const variantToComponent = (variant) => {
  let nameArr = variant.split('-');

  // Capitalize initial letter of name parts
  nameArr = [...nameArr].map((namePart) => startCase(namePart));

  return nameArr.join('');
};
