import {useQuery} from '@tanstack/react-query';
import {request} from '..';

export const useHistoryQuery = () => {
  return useQuery({
    queryKey: ['history'],
    queryFn: () => request('/diagnosis/history', 'get', {}, true),
  });
};
