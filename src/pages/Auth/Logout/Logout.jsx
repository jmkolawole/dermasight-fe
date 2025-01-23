import {useContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {AccountContext} from '../../../contexts';
import PageLoader from '../../../components/PageLoader/PageLoader';
import {useLogoutMutation} from '../../../api/mutations/auth.mutation';

const Logout = () => {
  const navigate = useNavigate();

  // Account context
  const {setAccount} = useContext(AccountContext);

  // Logout mutation
  const {mutate: logout, isLoading} = useLogoutMutation();

  useEffect(() => {
    // Perform server logout
    logout(null, {
      onSuccess: () => {
        // Clear local account data
        setAccount({});
        localStorage.removeItem('account');

        // Navigate to login page
        navigate('/login');
      },
      onError: (error) => {
        console.error('Failed to log out:', error);
      },
    });
  }, [logout, setAccount, navigate]);

  return isLoading ? <PageLoader /> : null
};

export default Logout;
