import {useEffect, useState} from 'react';
import {useHistoryQuery} from '../../api/queries/diagnosis.query';
import {Avatar, Text} from '../../ds';
import * as S from './Home.style';
import {parseApiResponse, truncateText} from '../../utils/functions';
import { useNavigate } from 'react-router-dom';
const History = () => {
  const {data} = useHistoryQuery();
  const [histories, setHistories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setHistories(data.data);
    }
  }, [data]);

  const getDetails = (hist) => {
    let result = parseApiResponse(hist.chatgpt_response);
    result = truncateText(result.assessment, 25);
    return result;
  };

  const onNavigate = (item) => {
    navigate('/analysis', {state: {response: item.chatgpt_response}});
  };

  return (
    <S.HistorySection>
      <Text weight={600} type="h6">
        History
      </Text>

      <S.HistoryContent>
        <Text weight={600} size="md">
          Search History
        </Text>

        <S.HistoryContentInner>
          {histories.map((history) => {
            return (
              <S.HistoryItem
                key={history.id}
                onClick={() => onNavigate(history)}
              >
                <S.HistoryItemImg>
                  <Avatar
                    radius={9}
                    size={40}
                    type="image"
                    value="https://i.pravatar.cc/300?u=ironman@avengers.com"
                  />
                </S.HistoryItemImg>

                <S.HistoryItemContent>
                  <Text weight={400} size="sm">
                    {getDetails(history)}
                  </Text>
                </S.HistoryItemContent>
              </S.HistoryItem>
            );
          })}
        </S.HistoryContentInner>
      </S.HistoryContent>
    </S.HistorySection>
  );
};

export default History;
