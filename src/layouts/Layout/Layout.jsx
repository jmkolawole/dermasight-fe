import {useContext, useEffect, useState} from 'react';
import {AccountContext} from '../../contexts';
import {Outlet, useNavigate} from 'react-router-dom';
import PageLoader from '../../components/PageLoader/PageLoader'


export const Layout = () => {
  const navigate = useNavigate();
  const {account} = useContext(AccountContext);

  const [renderOutlet, setRenderOutlet] = useState(false);

  useEffect(() => {
    const accountArr = Object.keys(account);
    if (
      accountArr.length > 0 &&
      accountArr.includes('user') &&
      accountArr.includes('token')
    ) {
      setRenderOutlet(true);
    } else {
      localStorage.removeItem('account');
      navigate('/login');
    }
  }, [account, navigate]);

  return (
    <div>
      {renderOutlet ? (
        <div>
          <Outlet />
        </div>
      ) : (
        <PageLoader />
      )}
    </div>
  );
};
