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

export const parseApiResponse = (responseText) => {
  // Assuming the API response is in the "response" field
  const severityMatch = responseText.match(/severity score of (\d+) out of 5/);
  const severity = severityMatch ? severityMatch[1] : null;

  return {
    symptomsDescription: responseText.split('\n\n')[0], // Extract the first paragraph
    assessment: responseText.split('\n\n')[1], // Extract the second paragraph
    severity: severity, // Extract the severity score
    recommendations: responseText.split('\n\n')[2], // Extract the third paragraph
  };
};

export const truncateText = (text, n) => {
  // Split the text into an array of words
  const words = text.split(' ');

  // If the text has fewer words than `n`, return the original text
  if (words.length <= n) {
    return text;
  }

  // Truncate the text to `n` words and add an ellipsis
  return words.slice(0, n).join(' ') + '...';
};
