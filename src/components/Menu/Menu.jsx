import {useRef} from 'react';
import * as S from './Menu.style';
import PropTypes from 'prop-types';
import {Icon, Text, isDescendantElement, useClickOutside} from '../../ds';

const Menu = ({
  menuItems,
  setShowMenu,
  toggleRef,
  right = '40px',
  width = '240px',
}) => {
  const menuRef = useRef(null);

  useClickOutside(menuRef, (e) => {
    if (!isDescendantElement(toggleRef.current, e.target)) {
      if (!isDescendantElement(menuRef.current, e.target)) {
        setShowMenu(false);
      }
    }
  });

  return (
    <S.Container ref={menuRef} $right={right} $width={width}>
      {menuItems
        .filter((item) => !item.disabled)
        .map((item, key) => (
          <div onClick={!item.disabled && item.action} key={key}>
            <S.MenuItem $disabled={item.disabled}>
              <div>
                <Icon
                  bg="inherit"
                  color={item.color}
                  name={item.icon}
                  size={item?.iconSize ?? 20}
                  weight={item?.iconWeight ?? 1.5}
                />
              </div>
              <Text color={item.color} size="md" type="p">
                {item.text}
              </Text>
            </S.MenuItem>
          </div>
        ))}
    </S.Container>
  );
};

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object),
  setShowMenu: PropTypes.func,
  toggleRef: PropTypes.object,
  right: PropTypes.string,
  width: PropTypes.string,
};

export default Menu;
