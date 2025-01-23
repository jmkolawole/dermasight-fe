/* eslint-disable react/display-name */
import * as S from './TextInput.style';
import {InputError, InputLabel} from '../Common/Common.style.js';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.jsx';
import {forwardRef} from 'react';

const TextInput = forwardRef(
  (
    {
      type = 'text',
      size = 'md',
      label,
      error = [],
      width = 'full',
      radius = 8,
      search = false,
      removeBtSpace = false,
      maxLength,
      icon = '',
      iconWeight = 0,
      ...rest
    },
    ref
  ) => {
    const hasError = error.length > 0 ? true : false;
    const hasLabel = label?.length && label.length > 0 ? true : false;

    return (
      <S.InputContainer $width={width} $removeBtSpace={removeBtSpace}>
        {hasLabel && (
          <InputLabel
            $size={size}
            $disabled={rest?.disabled}
            $required={rest?.required}
          >
            {label}
          </InputLabel>
        )}

        <S.Input
          type={type}
          $size={size}
          $error={hasError}
          $radius={radius}
          maxLength={maxLength ?? 'unset'}
          $search={search || icon}
          ref={ref}
          {...rest}
        />

        {search && !icon ? (
          <S.SearchIcon $hasLabel={hasLabel} $errorCount={error.length}>
            <Icon name="search" color="neutral.700" />
          </S.SearchIcon>
        ) : (
          <S.SearchIcon $hasLabel={hasLabel} $errorCount={error.length}>
            <Icon
              weight={iconWeight}
              name={icon}
              color={hasError ? 'destructive.600' : 'neutral.700'}
            />
          </S.SearchIcon>
        )}

        {error.map((err, i) => (
          <InputError key={i}>{err}</InputError>
        ))}
      </S.InputContainer>
    );
  }
);

TextInput.propTypes = {
  type: PropTypes.oneOf([
    'text',
    'email',
    'password',
    'number',
    'tel',
    'url',
    'date',
  ]),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  label: PropTypes.string,
  error: PropTypes.arrayOf(PropTypes.string),
  width: PropTypes.oneOf(['fit', 'full']),
  radius: PropTypes.number,
  search: PropTypes.bool,
  removeBtSpace: PropTypes.bool,
  maxLength: PropTypes.number,
  icon: PropTypes.string,
  iconWeight: PropTypes.number,
};

export default TextInput;
