import {useEffect, useState} from 'react';
import {AccountContext} from '..';
import PropTypes from 'prop-types';

// Pull local storage data
const localAccountData = localStorage.getItem('account') ?? '{}';

const AccountProvider = ({children}) => {
  /**
   * Account data structure
   * {
   *   user: object,
   *   token: string
   * }
   */
  const [account, setAccount] = useState(JSON.parse(localAccountData));

  useEffect(() => {
    if (Object.keys(account).length > 0) {
      localStorage.setItem('account', JSON.stringify(account));
    }
  }, [account]);

  return (
    <AccountContext.Provider value={{account, setAccount}}>
      {children}
    </AccountContext.Provider>
  );
};

AccountProvider.propTypes = {
  children: PropTypes.node,
};

export default AccountProvider;
