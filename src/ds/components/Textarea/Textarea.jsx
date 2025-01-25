import {useEffect, useRef} from 'react';
import * as S from './Textarea.style';
import {InputError, InputLabel} from '../Common/Common.style';
import PropTypes from 'prop-types';

const Textarea = ({
  size = 'md',
  label,
  error = [],
  width = 'full',
  radius = 8,
  value = '',
  onChange = () => {},
  containerRef = null,
  innerError = false,
  ...rest
}) => {
  const hasError = error.length > 0 ? true : false;
  const hasLabel = label?.length && label.length > 0 ? true : false;

  const ref = useRef(null);

  // Monitor and auto-adjust the height of the element
  useEffect(() => {
    if (ref.current) {
      const initialContainerScrollHeight = containerRef
        ? containerRef.scrollTop
        : 0;

      ref.current.style.height = '114px';
      const scrollHeight = ref.current.scrollHeight;

      // Set the height threshold
      const maxHeight = scrollHeight - 20;

      if (maxHeight <= 331) {
        ref.current.style.height = maxHeight + 'px';
      } else {
        ref.current.style.height = '331' + 'px';
      }

      if (containerRef) {
        containerRef.scrollTop = initialContainerScrollHeight;
      }
    }
  }, [ref?.current?.scrollHeight, value, containerRef]);

  return (
    <S.TextareaContainer $width={width}>
      {hasLabel && (
        <InputLabel
          $size={size}
          $disabled={rest?.disabled}
          $required={rest?.required}
        >
          {label}
        </InputLabel>
      )}
      
      <S.Textarea
        $size={size}
        $error={hasError}
        $borderError={innerError}
        $radius={radius}
        ref={ref}
        onChange={onChange}
        value={value}
        {...rest}
      />

      {error.map((err, i) => (
        <InputError key={i}>{err}</InputError>
      ))}
    </S.TextareaContainer>
  );
};

Textarea.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  label: PropTypes.string,
  error: PropTypes.arrayOf(PropTypes.string),
  width: PropTypes.oneOf(['fit', 'full']),
  radius: PropTypes.number,
  value: PropTypes.any,
  onChange: PropTypes.func,
  containerRef: PropTypes.any,
  innerError: PropTypes.bool,
};

export default Textarea;
