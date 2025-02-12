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
  // Split the response text by the headers
  const descriptionMatch = responseText.match(/\*\*Description:\*\*\s*([\s\S]*?)(\n\n\*\*|$)/);
  const recommendationMatch = responseText.match(/\*\*Recommendation:\*\*\s*([\s\S]*?)(\n\n\*\*|$)/);
  const assessmentMatch = responseText.match(/\*\*Assessment:\*\*\s*([\s\S]*?)(\n\n\*\*|$)/);
  const severityMatch = responseText.match(/\*\*Rating:\*\*\s*Severity Score:\s*(\d+)\/5/);

  // Extract the content based on the matches
  const symptomsDescription = descriptionMatch ? descriptionMatch[1].trim() : null;
  const recommendations = recommendationMatch ? recommendationMatch[1].trim() : null;
  const assessment = assessmentMatch ? assessmentMatch[1].trim() : null;
  const severity = severityMatch ? severityMatch[1] : null;

  return {
    symptomsDescription, // Extract the description content
    recommendations,    // Extract the recommendation content
    assessment,         // Extract the assessment content
    severity,           // Extract the severity score
  };
};

export const truncateText = (text, n) => {
  // Split the text into an array of words
  const words = text?.split(' ');

  // If the text has fewer words than `n`, return the original text
  if (words?.length <= n) {
    return text;
  }

  // Truncate the text to `n` words and add an ellipsis
  return words?.slice(0, n).join(' ') + '...';
};
