import {useMutation} from '@tanstack/react-query';
import {request} from '..';

// Login Mutation
export const useLogin = () =>
  useMutation({
    mutationFn: (data) => request('/auth/login', 'post', data, false),
    retry: false,
  });

export const useLogoutMutation = () => {
  return useMutation({
    mutationFn: () => request('/auth/logout', 'post', {}, true),
  });
};
