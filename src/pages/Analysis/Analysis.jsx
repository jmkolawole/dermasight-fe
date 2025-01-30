import {Text} from '../../ds';
import * as S from './Analysis.style';

const Analysis = () => {
  return (
    <S.Container>
      <S.Content>
        <Text weight={600} type="h6">
          Results
        </Text>
        <S.ContentInner>Results</S.ContentInner>
      </S.Content>
    </S.Container>
  );
};

export default Analysis;
