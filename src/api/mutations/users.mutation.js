import {useMutation} from '@tanstack/react-query';
import {request} from '..';

export const useUpdateUserMutation = () =>
  useMutation({
    mutationFn: (data) => request('/users', 'patch', data, true),
    retry: false,
  });
