import {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {AccountContext} from '../../../contexts';
import {useLogin} from '../../../api/mutations/auth.mutation';
import {handleError} from '../../../utils/functions';
import * as S from './Login.style';
import {Button, Text, TextInput} from '../../../ds/components';
import Loader from '../../../components/Loader/Loader';


const Login = () => {
  const navigate = useNavigate();

  // Form states
  const [fieldErrors, setFieldErrors] = useState({email: [], password: []});
  const [fieldValues, setFieldValues] = useState({email: '', password: ''});

  // Account context
  const {setAccount} = useContext(AccountContext);

  // Login mutation
  const {mutate, isPending} = useLogin();

  // Set form field value
  const setValue = (e, field) => {
    setFieldValues({...fieldValues, [field]: e.currentTarget.value});
  };

  // Reset form field error
  const resetErrors = (field) => setFieldErrors({...fieldErrors, [field]: []});

  // Login action
  const login = async (e) => {
    e.preventDefault();

    mutate(fieldValues, {
      onSuccess: (res) => {
        setAccount({
          user: res.data.user,
          token: res.data.token,
        });

        navigate('/');
      },
      onError: (err) => handleError(err, setFieldErrors),
    });
  };

  return (
    <div>
      <>
        <S.Header>
          <Text type="h2" weight={500}>
            Log in to Dermasight
          </Text>

          <Text color="neutral.600">
            Welcome! Proceed with your credentials
          </Text>
        </S.Header>
        <S.LoginForm onSubmit={login}>
          <TextInput
            type="email"
            placeholder="Enter your email"
            label="Email"
            size="sm"
            autoComplete="on"
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
            autoComplete="on"
            required
            value={fieldValues.password}
            error={fieldErrors.password}
            onChange={(e) => setValue(e, 'password')}
            onKeyDown={() => resetErrors('password')}
          />

          <Button type="submit" width="100%" disabled={isPending}>
            {isPending ? <Loader /> : 'Sign in'}
          </Button>

        </S.LoginForm>
      </>
    </div>
  );
};

export default Login;
