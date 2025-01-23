import * as S from './Button.style';
import {buttonVariants, variantToComponent} from './Button.utils';
import PropTypes from 'prop-types';

const Button = ({
  variant = 'primary',
  size = 'md',
  width = 'fit-content',
  radius = 8,
  children,
  ...rest
}) => {
  const styledButtonProps = {
    $radius: radius,
    $width: width,
    $size: size,
  };

  const ButtonStyledComponent = S[variantToComponent(variant)];

  return (
    <ButtonStyledComponent {...styledButtonProps} {...rest}>
      {children}
    </ButtonStyledComponent>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf([...buttonVariants]),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  width: PropTypes.string,
  radius: PropTypes.number,
  children: PropTypes.node.isRequired || PropTypes.string.isRequired,
};

export default Button;
