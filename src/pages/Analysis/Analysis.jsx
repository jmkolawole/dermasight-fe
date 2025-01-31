import {useState} from 'react';
import {Text} from '../../ds';
import * as S from './Analysis.style';
import {useLocation} from 'react-router-dom';
import {parseApiResponse} from '../../utils/functions';

const Analysis = () => {
  const location = useLocation();
  const response = location.state?.response;

  const [details, setDetails] = useState({});

  useState(() => {
    setDetails(parseApiResponse(response));
  }, []);

  return (
    <S.Container>
      <S.Content>
        <Text weight={600} type="h3">
          Results
        </Text>
        <S.ContentInner>
          {details?.symptomsDescription && (
            <div>
              <Text weight={600} type="h5">
                Symptoms Description
              </Text>
              {details?.symptomsDescription}
            </div>
          )}
          {details?.assessment && (
            <div>
              <Text weight={600} type="h5">
                Assessment
              </Text>
              {details?.assessment}
            </div>
          )}

          {details?.recommendations && (
            <div>
              <Text weight={600} type="h5">
                Recommendations
              </Text>
              {details?.recommendations}
            </div>
          )}

          {details?.severity && (
            <div>
              <Text weight={600} type="h5">
                Severity
              </Text>
              {details?.severity}/5
            </div>
          )}
        </S.ContentInner>
      </S.Content>
    </S.Container>
  );
};

export default Analysis;
