import {Avatar, Text} from '../../ds';
import * as S from './Home.style';
const History = () => {
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
          <S.HistoryItem>
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
                The wonders of this type of diesease is that it is not that easy
                to detect when you start, but I hope things can be done about it...
              </Text>
            </S.HistoryItemContent>
          </S.HistoryItem>

          <S.HistoryItem>
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
                The wonders of this type of diesease is that...
              </Text>
            </S.HistoryItemContent>
          </S.HistoryItem>
        </S.HistoryContentInner>
      </S.HistoryContent>
    </S.HistorySection>
  );
};

export default History;
