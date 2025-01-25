import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import * as S from './Home.style';

const DragAndDrop = () => {
  const [base64, setBase64] = useState(null);
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        setBase64(base64Image);

        // Trigger API call here
        setLoading(true);
        uploadImage(base64Image).finally(() => setLoading(false));
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': [] // Accept all image types (JPEG, PNG, etc.)
    },
  });

  const uploadImage = async (base64Image) => {
    console.log('Uploading image...');
    // Simulate API call delay
    return new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <S.ImageContainer>
      {loading ? (
        <S.LoadingOverlay>
          <S.LoadingSpinner /> {/* Your spinner or loading indicator */}
          <S.LoadingText>Uploading...</S.LoadingText>
        </S.LoadingOverlay>
      ) : base64 ? (
        <S.ImagePreview>
          <S.PreviewImage src={base64} alt="Preview" />
        </S.ImagePreview>
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
