import {Button, TextArea} from '../../ds';
import * as S from './Home.style';
const Description = () => {
  return (
    <S.DescriptionWrapper>
      <TextArea
        label=""
        placeholder="Describe your skin conditions or symptoms"
        radius={8}
        required
        size="md"
        width="full"
        style={{height: '200px !important'}}
      />

      <Button radius={8} size="md" variant="primary" width="622px">
        Send Description
      </Button>
    </S.DescriptionWrapper>
  );
};

export default Description;
