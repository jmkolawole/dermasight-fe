import {Outlet, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {useContext} from 'react';
import {AccountContext} from '../../contexts';
import {has} from 'lodash';
import {useEffect} from 'react';
import * as S from './AuthLayout.style';

const pageTitleMap = {
  '/login': 'Login',
  '/auth/google': 'Login',
  '/forgot-password': 'Forgot Password',
  '/reset-password': 'Reset Password',
};

const AuthLayout = () => {
  const navigate = useNavigate();
  const {account} = useContext(AccountContext);
  // eslint-disable-next-line no-unused-vars
  const [renderOutlet, setRenderOutlet] = useState(false);

  // Redirect if logged in
  useEffect(() => {
    const accountArr = Object.keys(account);

    if (
      accountArr.length > 0 &&
      accountArr.includes('user') &&
      accountArr.includes('token')
    ) {
      navigate('/');
    } else {
      //localStorage.removeItem('account');
      setRenderOutlet(true);

      if (has(pageTitleMap, location.pathname)) {
        document.getElementsByTagName('title')[0].innerText = `Skinxray - ${
          pageTitleMap[location.pathname]
        }`;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, navigate, setRenderOutlet, location.pathname]);

  return (
    <S.Container>
      <S.InnerContainer>
        <Outlet />
      </S.InnerContainer>
    </S.Container>
  );
};

export default AuthLayout;
