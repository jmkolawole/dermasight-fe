import {useMutation} from '@tanstack/react-query';
import {request} from '..';

export const useGetDiagnosisMutation = () =>
  useMutation({
    mutationFn: (data) => request('/diagnosis', 'post', data, true),
    retry: false,
  });
