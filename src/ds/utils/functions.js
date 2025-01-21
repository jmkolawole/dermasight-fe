import {camelCase, toUpper, trim} from 'lodash';
import {colors} from '..';

/**
 * Convert style object to string
 * @param {{[key: string]: string}} styleObj
 * @return {string}
 */
export const styleObjToStr = (styleObj) => {
  const styleArr = Object.keys(styleObj).map((key) => {
    return `${key}:${styleObj[key]}`;
  });
  return styleArr.join(';');
};

/**
 * Convert css style object or string to jsx style object
 * @param {{[key: string]: string} | string} style
 * @return {{[key: string]: string}}
 */
export const cssStyleToJsx = (style) => {
  const jsxStyle = {};

  if (typeof style === 'string') {
    style.split(';').forEach((value) => {
      const styleAttr = value.split(':');
      jsxStyle[camelCase(styleAttr[0])] = trim(styleAttr[1]);
    });
  } else {
    Object.keys(style).forEach((key) => {
      jsxStyle[camelCase(key)] = style[key];
    });
  }

  return jsxStyle;
};

/**
 * Get color using pallete string (eg. neutral.500 will return #ADB5BD)
 * @param {string.string} color
 * @return {string}
 */
export const strToColor = (color) => {
  const colorParts = color.split('.');
  const title = colorParts[0];
  const value = colorParts[1];

  return colors[title][value];
};

/**
 * Generate color select options for storybook
 * @return {string[]}
 */
export const colorOptions = () => {
  const colorOptions = [];

  Object.entries(colors).forEach((color) => {
    Object.keys(color[1]).forEach((key) => {
      colorOptions.push(`${color[0]}.${key}`);
    });
  });

  return colorOptions;
};

/**
 * Check if an element is a descendant of another element
 * @param {HTMLElement | string} parent The parent element object or selector
 * @param {HTMLElement} child The child element
 * @return {boolean}
 */
export const isDescendantElement = (parent, child) => {
  let node = child.parentNode;
  const parentNode =
    typeof parent === 'string' ? document.querySelector(parent) : parent;

  while (node != null) {
    if (node == parentNode) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
};

/**
 * Return first 2 letters of the words in a string
 * @param {string} text e.g Martin Luther
 * @return {string} e.g ML
 */
export const avatarText = (text) => {
  if (text && text.length > 1) {
    if (text.includes('+')) {
      return text;
    }
    const firstPart = text.split(' ')[0];
    let secondPart = text.substring(1, 2);

    if (text.split(' ').length > 1 && text.split(' ')[1].length > 0) {
      secondPart = text.split(' ')[1].substring(0, 1);
      secondPart = isNaN(parseInt(secondPart))
        ? secondPart
        : text.substring(1, 2);
    }

    const shortText = `${firstPart.substring(0, 1)}${secondPart}`;

    return toUpper(shortText);
  }

  return '';
};

/**
 * Return an array of numbers based on the length passed
 * Works like range in python
 *
 * @param {number} length
 * @return {array}
 */
export const numberArray = (length) => {
  return new Array(length - 0).fill().map((i) => i + 1);
};

/**
 * Clear date fields for the DateField component
 */
export const clearDateFields = (className) => {
  const dateFields = document.querySelectorAll('.' + className);
  dateFields.forEach((field) => {
    field.click();
  });
};
