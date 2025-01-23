import {fonts} from '../..';
import {cssStyleToJsx, strToColor} from '../../utils/functions';
import PropTypes from 'prop-types';

const Text = ({
  type = 'p',
  size = 'md',
  weight,
  color = 'neutral.900',
  children,
  ...rest
}) => {
  const TextComponent = type;

  let attrs = {};

  if (type === 'p') {
    attrs = {...fonts.p[size], color: strToColor(color)};
  } else {
    attrs = {...fonts.heading[type], color: strToColor(color)};
  }
  attrs = weight ? {...attrs, fontWeight: weight} : attrs;

  return (
    <TextComponent style={{...cssStyleToJsx(attrs)}} {...rest}>
      {children}
    </TextComponent>
  );
};

Text.propTypes = {
  type: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl']),
  weight: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.node || PropTypes.string,
};

export default Text;
