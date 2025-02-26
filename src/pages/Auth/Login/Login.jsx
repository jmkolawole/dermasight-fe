import {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {AccountContext} from '../../../contexts';
import {useLogin, useRegister} from '../../../api/mutations/auth.mutation';
import {handleError} from '../../../utils/functions';
import * as S from './Login.style';
import {Button, Text, TextInput, Icon} from '../../../ds/components';
import Loader from '../../../components/Loader/Loader';
import PropTypes from 'prop-types';


const Login = ({ isSignUp = false }) => {
  const navigate = useNavigate();

  // Form states
  const [fieldErrors, setFieldErrors] = useState({
    email: [], 
    password: [],
    firstname: [],
    lastname: [],
    username: [],
    password_confirmation: []
  });
  
  const [fieldValues, setFieldValues] = useState({
    email: '', 
    password: '',
    firstname: '',
    lastname: '',
    username: '',
    password_confirmation: ''
  });

  // Account context
  const {setAccount} = useContext(AccountContext);

  // Login and Register mutations
  const {mutate: loginMutate, isPending: isLoginPending} = useLogin();
  const {mutate: registerMutate, isPending: isRegisterPending} = useRegister();

  const isPending = isSignUp ? isRegisterPending : isLoginPending;

  // Set form field value
  const setValue = (e, field) => {
    setFieldValues({...fieldValues, [field]: e.currentTarget.value});
  };

  // Reset form field error
  const resetErrors = (field) => setFieldErrors({...fieldErrors, [field]: []});

  // Validate form for sign up
  const validateSignUpForm = () => {
    let isValid = true;
    const errors = { ...fieldErrors };
    
    if (fieldValues.password !== fieldValues.password_confirmation) {
      errors.password_confirmation = ['Passwords do not match'];
      isValid = false;
    }
    
    if (fieldValues.password.length < 8) {
      errors.password = ['Password must be at least 8 characters'];
      isValid = false;
    }

    if (!fieldValues.firstname.trim()) {
      errors.firstname = ['First name is required'];
      isValid = false;
    }

    if (!fieldValues.lastname.trim()) {
      errors.lastname = ['Last name is required'];
      isValid = false;
    }

    if (!fieldValues.username.trim()) {
      errors.username = ['Username is required'];
      isValid = false;
    }
    
    setFieldErrors(errors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSignUp) {
      if (!validateSignUpForm()) return;
      
      const registerData = {
        firstname: fieldValues.firstname,
        lastname: fieldValues.lastname,
        username: fieldValues.username,
        email: fieldValues.email,
        password: fieldValues.password,
        password_confirmation: fieldValues.password_confirmation
      };
      
      registerMutate(registerData, {
        onSuccess: (res) => {
          setAccount({
            user: res.data.user,
            token: res.data.token,
          });
          navigate('/home');
        },
        onError: (err) => handleError(err, setFieldErrors),
      });
    } else {
      const loginData = {
        email: fieldValues.email,
        password: fieldValues.password
      };
      
      loginMutate(loginData, {
        onSuccess: (res) => {
          setAccount({
            user: res.data.user,
            token: res.data.token,
          });
          navigate('/home');
        },
        onError: (err) => handleError(err, setFieldErrors),
      });
    }
  };

  return (
    <div>
      <>
        <S.BackToHomeContainer>
          <Button 
            variant="primary" 
            onClick={() => navigate('/')}
            size="sm"
            title="Return to Home"
            aria-label="Return to Home"
          >
            <Icon name={'home'} color='shades.0'/> 
          </Button>
        </S.BackToHomeContainer>
        
        <S.Header>
          <Text type="h2" weight={500}>
            {isSignUp ? 'Create an Account' : 'Log in to Skinxray AI'}
          </Text>

          <Text color="neutral.600">
            {isSignUp 
              ? 'Sign up to get started with skin health analysis' 
              : 'Welcome! Proceed with your credentials'}
          </Text>
        </S.Header>
        <S.LoginForm onSubmit={handleSubmit}>
          {isSignUp && (
            <>
              <TextInput
                type="text"
                placeholder="Enter your first name"
                label="First Name"
                size="sm"
                autoComplete="given-name"
                required
                value={fieldValues.firstname}
                error={fieldErrors.firstname}
                onChange={(e) => setValue(e, 'firstname')}
                onKeyDown={() => resetErrors('firstname')}
              />
              
              <TextInput
                type="text"
                placeholder="Enter your last name"
                label="Last Name"
                size="sm"
                autoComplete="family-name"
                required
                value={fieldValues.lastname}
                error={fieldErrors.lastname}
                onChange={(e) => setValue(e, 'lastname')}
                onKeyDown={() => resetErrors('lastname')}
              />
              
              <TextInput
                type="text"
                placeholder="Choose a username"
                label="Username"
                size="sm"
                autoComplete="username"
                required
                value={fieldValues.username}
                error={fieldErrors.username}
                onChange={(e) => setValue(e, 'username')}
                onKeyDown={() => resetErrors('username')}
              />
            </>
          )}

          <TextInput
            type="email"
            placeholder="Enter your email"
            label="Email"
            size="sm"
            autoComplete="email"
            required
            value={fieldValues.email}
            error={fieldErrors.email}
            onChange={(e) => setValue(e, 'email')}
            onKeyDown={() => resetErrors('email')}
          />

          <TextInput
            type="password"
            placeholder="••••••••"
            label="Password (8+ Characters)"
            size="sm"
            autoComplete={isSignUp ? 'new-password' : 'current-password'}
            required
            value={fieldValues.password}
            error={fieldErrors.password}
            onChange={(e) => setValue(e, 'password')}
            onKeyDown={() => resetErrors('password')}
          />
          
          {isSignUp && (
            <TextInput
              type="password"
              placeholder="••••••••"
              label="Confirm Password"
              size="sm"
              autoComplete="new-password"
              required
              value={fieldValues.password_confirmation}
              error={fieldErrors.password_confirmation}
              onChange={(e) => setValue(e, 'password_confirmation')}
              onKeyDown={() => resetErrors('password_confirmation')}
            />
          )}

          <Button type="submit" width="100%" disabled={isPending}>
            {isPending ? <Loader /> : (isSignUp ? 'Sign Up' : 'Sign In')}
          </Button>
          
          <S.SwitchAuthMode>
            <Text size="sm" color="neutral.600">
              {isSignUp ? 'Already have an account?' : 'Don\'t have an account?'}
            </Text>
            <S.AuthLink onClick={() => navigate(isSignUp ? '/login' : '/signup')}>
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </S.AuthLink>
          </S.SwitchAuthMode>
        </S.LoginForm>
      </>
    </div>
  );
};

Login.propTypes = {
  isSignUp: PropTypes.bool
};

export default Login;
