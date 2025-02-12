import {useState} from 'react';
import {Tab, Text} from '../../ds';
import * as S from './Home.style';
import DragAndDrop from './DragAndDrop';
import Description from './Description';
import {useNavigate} from 'react-router-dom';
import History from './History';
import {useGetDiagnosisMutation} from '../../api/mutations/diagnosis.mutation';
import {handleError} from '../../utils/functions';

const Home = () => {
  const [uploadType, setUploadType] = useState('upload');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const {isPending, mutate} = useGetDiagnosisMutation();

  const handleUpload = (base64Image) => {
    console.log(base64Image);
    setIsLoading(true);
    setTimeout(() => {
      //setIsLoading(false);
      //navigate('/analysis');
      setIsLoading(false);
    }, 2000);
  };

  const handleSubmitDescription = (description) => {
    const payload = {
      skin_issue_description: description,
    };

    mutate(payload, {
      onSuccess: (res) => {
        navigate('/analysis', {state: {response: res.data}});
      },
      onError: (err) => handleError(err),
    });

  };

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
            {uploadType === 'upload' ? (
              <DragAndDrop isLoading={isLoading} onUpload={handleUpload} />
            ) : (
              <Description
                isLoading={isPending}
                onSubmit={handleSubmitDescription}
              />
            )}
          </S.SymptomsWrapper>
        </S.MainContent>
        <History />
      </S.Content>
    </S.Container>
  );
};

export default Home;
