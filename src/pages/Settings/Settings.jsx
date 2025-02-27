import {useState, useRef, useContext, useEffect} from 'react';
import * as S from './Settings.style';
import {Button, TextInput, Text, Avatar} from '../../ds';
import {AccountContext} from '../../contexts';
import {useUpdateUserMutation} from '../../api/mutations/users.mutation';
import {handleError} from '../../utils/functions';
import Loader from '../../components/Loader/Loader';
import { toast } from 'react-toastify';
import { getImagesUrl } from '../../api';

const Settings = () => {
  const [fieldValues, setFieldValues] = useState({
    firstname: '',
    lastname: '',
    username: '',
    old_password: '',
    password: '',
    password_confirmation: '',
  });

  const [fieldErrors, setFieldErrors] = useState({
    firstname: [],
    lastname: [],
    username: [],
    old_password: [],
    password: [],
    password_confirmation: [],
  });
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const fileInputRef = useRef(null);

  const {account, setAccount} = useContext(AccountContext);

  const {mutate, isPending} = useUpdateUserMutation();

  // Check if the screen is mobile size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    setFieldValues((prev) => ({
      ...prev,
      firstname: account?.user.first_name || '',
      lastname: account?.user.last_name || '',
      username: account?.user.username || '',
    }));
    setPreviewImage(getImagesUrl(account.user.avatar));
  }, [account]);

  const handleInputChange = (e, field) => {
    setFieldValues({...fieldValues, [field]: e.target.value});
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        setProfileImage(base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChooseImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const resetErrors = (field) => setFieldErrors({...fieldErrors, [field]: []});

  const cleanPayload = (data) => {
    return Object.fromEntries(
      Object.entries(data).filter(
        ([_, value]) => value !== '' && value !== null && value !== undefined // eslint-disable-line no-unused-vars
      )
    );
  };

  const handleSubmit = () => {
    const payload = {...fieldValues, image: profileImage};
    const data = cleanPayload(payload);

    mutate(data, {
      onSuccess: (res) => {
        setAccount((prev) => ({
          ...prev,
          user: res.data, 
        }));
        toast.success('Settings Updated Successfully');
      },
      onError: (err) => {
        handleError(err, setFieldErrors, false);
      },
    });
  };

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <Text weight={600} type="h6">
            Settings
          </Text>
        </S.Header>
        <S.ContentInner>
          {/* Profile Image Section */}
          <S.ImageSection>
            <Avatar
              radius={isMobile ? 80 : 100}
              size={isMobile ? 80 : 100}
              type={previewImage ? 'image' : 'text'}
              value={
                previewImage
                  ? previewImage
                  : account.user.name ?? account.user.email
              }
            />
            <S.FileInput
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            <Button 
              onClick={handleChooseImageClick}
              width={isMobile ? '100%' : 'auto'}
            >
              Choose Image
            </Button>
          </S.ImageSection>
          {/* Form Fields */}
          <S.SettingsSection>
            <S.SectionTitle>
              <S.SectionIcon>
                <i className="fas fa-user"></i>
              </S.SectionIcon>
              <Text weight={600} size="md">
                Personal Information
              </Text>
            </S.SectionTitle>
            <TextInput
              type="text"
              label="First Name"
              placeholder="Enter your first name"
              value={fieldValues.firstname}
              onChange={(e) => handleInputChange(e, 'firstname')}
              error={fieldErrors?.firstname}
              onKeyDown={() => resetErrors('firstname')}
            />
            <TextInput
              type="text"
              label="Last Name"
              placeholder="Enter your last name"
              value={fieldValues.lastname}
              onChange={(e) => handleInputChange(e, 'lastname')}
              error={fieldErrors?.lastname}
              onKeyDown={() => resetErrors('lastname')}
            />
            <TextInput
              type="text"
              label="Username"
              placeholder="Enter your username"
              value={fieldValues.username}
              onChange={(e) => handleInputChange(e, 'username')}
              error={fieldErrors?.username}
              onKeyDown={() => resetErrors('username')}
            />
          </S.SettingsSection>
          
          <S.SettingsSection>
            <S.SectionTitle>
              <S.SectionIcon>
                <i className="fas fa-lock"></i>
              </S.SectionIcon>
              <Text weight={600} size="md">
                Change Password
              </Text>
            </S.SectionTitle>
            <TextInput
              type="password"
              label="Current Password"
              placeholder="Enter your current password"
              value={fieldValues.old_password}
              onChange={(e) => handleInputChange(e, 'old_password')}
              error={fieldErrors?.old_password}
              onKeyDown={() => resetErrors('old_password')}
            />
            <TextInput
              type="password"
              label="New Password"
              placeholder="Enter a new password"
              value={fieldValues.password}
              onChange={(e) => handleInputChange(e, 'password')}
              error={fieldErrors?.password}
              onKeyDown={() => resetErrors('password')}
            />
            <TextInput
              type="password"
              label="Confirm New Password"
              placeholder="Re-enter your new password"
              value={fieldValues.password_confirmation}
              onChange={(e) => handleInputChange(e, 'password_confirmation')}
              error={fieldErrors?.password_confirmation}
              onKeyDown={() => resetErrors('password_confirmation')}
            />
          </S.SettingsSection>
          
          <S.SaveButton
            radius={8}
            size="md"
            variant="primary"
            width={isMobile ? '100%' : 'fit-content'}
            onClick={handleSubmit}
            disabled={isPending}
          >
            {isPending ? <Loader /> : 'Update Information'}
          </S.SaveButton>
        </S.ContentInner>
      </S.Content>
    </S.Container>
  );
};

export default Settings;
