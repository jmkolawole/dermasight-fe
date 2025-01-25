import {useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import * as S from './Home.style';
import PropTypes from 'prop-types';


const DragAndDrop = ({onUpload, isLoading}) => {
  const [setBase64] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        setBase64(base64Image);

        uploadImage(base64Image);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    accept: {
      'image/*': [], // Accept all image types (JPEG, PNG, etc.)
    },
  });

  const uploadImage = async (base64Image) => {
    onUpload(base64Image);
  };

  return (
    <S.ImageContainer>
      {isLoading ? (
        <S.LoadingOverlay>
          <S.LoadingSpinner /> {/* Your spinner or loading indicator */}
          <S.LoadingText>Uploading...</S.LoadingText>
        </S.LoadingOverlay>
      ) : (
        <S.ImageWrapper {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <S.DragActive>Drop your image here...</S.DragActive>
          ) : (
            <>
              <S.Icon>↑</S.Icon>
              <S.Text>Drag and drop your image here</S.Text>
              <S.OrText>or</S.OrText>
              <S.BrowseButton>Browse Files</S.BrowseButton>
            </>
          )}
        </S.ImageWrapper>
      )}
    </S.ImageContainer>
  );
};

export default DragAndDrop;

DragAndDrop.propTypes = {
  onUpload: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
