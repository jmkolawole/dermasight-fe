import dayjs from 'dayjs';
import {camelCase} from 'lodash';
import {toast} from 'react-toastify';

/**
 * Error handler
 * @param {object} err
 * @param {function} setter
 * @param {boolean} inCamelCase
 */
export const handleError = (err, setter = () => {}, inCamelCase = true) => {
  if (err?.unauthenticated) {
    localStorage.removeItem('account');
    location.replace('/login');
  }

  if (err?.status === false && err?.error) {
    if (typeof err.error === 'string') {
      toast.error(err.error);
    } else {
      const fieldErrors = {};

      Object.keys(err.error).forEach((key) => {
        fieldErrors[inCamelCase ? camelCase(key) : key] = err.error[key];
      });

      setter((data) => {
        return {...data, ...fieldErrors};
      });
    }
  }
};

/**
 * Converts an file to base 64
 * @param {*} file
 * @returns
 */
export const getFileBase64 = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
  });
};

/**
 * Returns the relative time in human readable form
 */
export const timeAgo = (datetime) => {
    const date = dayjs.utc(datetime);
    return date.fromNow();
};

