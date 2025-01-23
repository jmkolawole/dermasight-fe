import axios from 'axios';

const apiUrl = import.meta.env.VITE_APP_API_URL;

const reqConfig = {
  headers: {},
};

/**
 * Generic request handler
 * @param {string} path Request path
 * @param {method} method Request method (get, post, delete, put, etc)
 * @param {object} data Form data
 * @param {object} params Request parameters
 * @param {object} headers Request headers
 * @return {Promise}
 */
export const request = async (
  path,
  method,
  data = {},
  auth = true,
  params = {},
  headers = {}
) => {
  const account = JSON.parse(localStorage.getItem('account'));
  if (auth && account) {
    reqConfig.headers['Authorization'] = `Bearer ${account.token}`;
  }

  reqConfig.params = params;
  reqConfig.headers = {...reqConfig.headers, ...headers};

  if (['get', 'delete'].includes(method)) {
    return axios[method](`${apiUrl}${path}`, reqConfig)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        const unauthenticated = auth
          ? {unauthenticated: err.response.status === 401}
          : {};

        throw {
          ...err.response.data,
          ...unauthenticated,
        };
      });
  } else {
    return axios[method](`${apiUrl}${path}`, data, reqConfig)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        const unauthenticated = auth
          ? {unauthenticated: err.response.status === 401}
          : {};

        throw {
          ...err.response.data,
          ...unauthenticated,
        };
      });
  }
};
