import {strToColor} from '../../ds';
import * as S from './Loader.style';
import PropTypes from 'prop-types';

const Loader = ({size = 22, color = 'shades.0', ...rest}) => {
  const thickness = (size * 2.5) / 20;

  return (
    <S.Spinner
      $size={size}
      $color={strToColor(color)}
      $thickness={thickness}
      {...rest}
    >
      <span></span>
    </S.Spinner>
  );
};

Loader.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Loader;
