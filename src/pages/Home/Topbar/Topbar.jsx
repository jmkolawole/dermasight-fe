import {useContext, useRef, useState} from 'react';
import {Avatar} from '../../../ds/components';
import * as S from './Topbar.style';
import {AccountContext} from '../../../contexts';
import Menu from '../../../components/Menu/Menu';
import { useNavigate } from 'react-router-dom';

const Topbar = () => {
  const {account} = useContext(AccountContext);
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const handleSettings = () => {
    setOpenMenu(true);
  };

  const handleLogout = () => {
    navigate('/logout');
  };

  const menuItems = [
    {
      text: 'Settings',
      icon: 'cog',
      color: 'neutral.700',
      action: handleSettings,
    },
    {
      text: 'Logout',
      icon: 'logout',
      color: 'neutral.700',
      action: handleLogout,
    },
  ];

  return (
    <S.Container>
      <div
        onClick={() => setOpenMenu(!openMenu)}
        ref={menuRef}
        style={{cursor: 'pointer'}}
      >
        <Avatar
          size={48}
          type={account.user.avatar ? 'image' : 'text'}
          value={
            account.user.avatar
              ? account.user.avatar
              : account.user.name ?? account.user.email
          }
        />
        {openMenu && (
          <div style={{position: 'absolute', top: '72px', right: '0', zIndex: 10}}>
            <Menu
              menuItems={menuItems}
              setShowMenu={setOpenMenu}
              toggleRef={menuRef}
            />
          </div>
        )}
      </div>

    </S.Container>
  );
};

export default Topbar;
