import {useState} from 'react';
import {Tab, Text} from '../../ds';
import * as S from './Home.style';
import DragAndDrop from './DragAndDrop';
import Description from './Description';

const Home = () => {
  const [uploadType, setUploadType] = useState('upload');

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <Text weight={700} type="h2">
            Skin Health Diagnostic
          </Text>
          <Text color="neutral.600" size="md">
            Upload an image or describe your symptoms for an AI-powered analysis
          </Text>
        </S.Header>
        <S.MainContent>
          <Tab
            height={40}
            items={['Upload Image', 'Describe Symptoms']}
            width={180}
            activeTab={
              uploadType === 'upload' ? 'Upload Image' : 'Describe Symptoms'
            }
            onChange={(item) => {
              setUploadType(item === 'Upload Image' ? 'upload' : 'describe');
            }}
          />
          <S.SymptomsWrapper>
            <Text weight={600} type="h6">
              {uploadType === 'upload' ? 'Upload Image' : 'Describe Symptoms'}
            </Text>
            {uploadType === 'upload' ? <DragAndDrop /> : <Description />}
          </S.SymptomsWrapper>
        </S.MainContent>
      </S.Content>
    </S.Container>
  );
};

export default Home;
