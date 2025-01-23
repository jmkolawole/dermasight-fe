import {icons as C} from './Icon.utils';
import {upperFirst} from 'lodash';
import {strToColor} from '../../utils/functions';
import PropTypes from 'prop-types';

const Icon = ({
  name,
  size = 20,
  color = 'neutral.900',
  weight,
  bg = 'inherit',
  radius = 0,
  padding = 0,
  ...rest
}) => {
  const iconName = upperFirst(name);
  const IconComponent = C[iconName];

  // Set icon weight and default weight (bool) if weight is not specified
  const iconWeight = weight ? weight : 2;
  const defaultWeight = weight ? false : true;

  if (iconName in C) {
    return (
      <IconComponent
        $width={size}
        $height={size}
        $color={color === 'transparent' ? 'transparent' : strToColor(color)}
        $weight={iconWeight}
        $defaultWeight={defaultWeight}
        $bg={bg === 'inherit' ? 'transparent' : strToColor(bg)}
        $radius={radius}
        $padding={padding}
        {...rest}
      />
    );
  }

  return <></>;
};

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  weight: PropTypes.number,
  color: PropTypes.string,
  bg: PropTypes.string,
  padding: PropTypes.number,
  radius: PropTypes.number,
};

export default Icon;
