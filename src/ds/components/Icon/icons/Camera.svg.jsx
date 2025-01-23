import {IconWrapper} from '../Icon.style';

export const Camera = ({...rest}) => {
  // Add this for icons with fill
  const iconWeight = {...rest}.$defaultWeight ? 0 : {...rest}.$weight;

  return (
    <IconWrapper $hasFill={true} {...rest} $weight={iconWeight}>
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_10762_11468)">
          <path
            d="M8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11Z"
            fill="#014F86"
          />
          <path
            d="M5.6 0L4.136 1.6H1.6C0.72 1.6 0 2.32 0 3.2V12.8C0 13.68 0.72 14.4 1.6 14.4H14.4C15.28 14.4 16 13.68 16 12.8V3.2C16 2.32 15.28 1.6 14.4 1.6H11.864L10.4 0H5.6ZM8 12C5.792 12 4 10.208 4 8C4 5.792 5.792 4 8 4C10.208 4 12 5.792 12 8C12 10.208 10.208 12 8 12Z"
            fill="#014F86"
          />
        </g>
        <defs>
          <clipPath id="clip0_10762_11468">
            <rect width="16" height="14" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </IconWrapper>
  );
};