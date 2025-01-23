import {IconWrapper} from '../Icon.style';

export const Check = ({...rest}) => {
  // Add this for icons with fill
  const iconWeight = {...rest}.$defaultWeight ? 0 : {...rest}.$weight;

  return (
    <IconWrapper $hasFill={true} {...rest} $weight={iconWeight}>
      <svg
        width="18"
        height="12"
        viewBox="0 0 18 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.7373 0.605859C17.1248 0.993359 17.1248 1.63086 16.7373 2.01836L7.36231 11.3934C7.16856 11.5871 6.9123 11.6871 6.65605 11.6871C6.39981 11.6871 6.14355 11.5871 5.9498 11.3934L1.2623 6.70586C0.874805 6.31836 0.874805 5.68086 1.2623 5.29336C1.6498 4.90586 2.28731 4.90586 2.67481 5.29336L6.65605 9.27461L15.3248 0.605859C15.7123 0.212109 16.3498 0.212109 16.7373 0.605859Z"
          fill="white"
        />
      </svg>
    </IconWrapper>
  );
};
