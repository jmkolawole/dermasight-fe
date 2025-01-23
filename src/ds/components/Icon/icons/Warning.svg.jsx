import {IconWrapper} from '../Icon.style';

export const Warning = ({...rest}) => {
  // Add this for icons with fill
  const iconWeight = {...rest}.$defaultWeight ? 0 : {...rest}.$weight;

  return (
    <IconWrapper $hasFill={true} {...rest} $weight={iconWeight}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_458_52746)">
          <path
            d="M7.99997 12.3691C8.56537 12.3691 9.03601 11.9359 9.08363 11.3725L9.81871 2.59313C9.86151 2.08396 9.68886 1.5806 9.34324 1.20465C8.99805 0.82919 8.51057 0.615234 7.99997 0.615234C7.48937 0.615234 7.00189 0.82919 6.65666 1.20465C6.31099 1.5806 6.13843 2.08396 6.18122 2.59313L6.91631 11.3725C6.96393 11.9359 7.43457 12.3691 7.99997 12.3691Z"
            fill="white"
          />
          <path
            d="M8.00006 13.0156C7.3457 13.0156 6.81543 13.5459 6.81543 14.2003C6.81543 14.8546 7.3457 15.3848 8.00006 15.3848C8.65442 15.3848 9.1847 14.8546 9.1847 14.2003C9.1847 13.5459 8.65442 13.0156 8.00006 13.0156Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_458_52746">
            <rect
              width="14.7692"
              height="14.7692"
              fill="white"
              transform="translate(0.615234 0.615234)"
            />
          </clipPath>
        </defs>
      </svg>
    </IconWrapper>
  );
};
