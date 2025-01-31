import {IconWrapper} from '../Icon.style';

export const Play = ({...rest}) => {
  // Add this for icons with fill
  const iconWeight = {...rest}.$defaultWeight ? 0 : {...rest}.$weight;

  return (
    <IconWrapper $hasFill={true} {...rest} $weight={iconWeight}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M42.3259 19.1646L9.95124 0.738891C6.51708 -1.22166 3.01587 0.922493 3.01587 4.77814V43.2436C3.01587 46.5101 5.14246 47.9997 7.11898 47.9997C8.04976 47.9997 8.99811 47.7059 9.94007 47.1328L42.46 27.2271C44.0949 26.2229 45.0129 24.7365 44.9841 23.1479C44.957 21.5578 43.9895 20.1049 42.3259 19.1646ZM40.2807 23.6716L7.76238 43.5725C7.54366 43.7066 7.37123 43.7736 7.25309 43.8072C7.22116 43.689 7.18923 43.507 7.18923 43.2436V4.77974C7.18923 4.38379 7.26107 4.18423 7.26107 4.13473C7.38879 4.14272 7.61231 4.20817 7.8933 4.36783L40.2632 22.7935C40.6623 23.0218 40.7804 23.2198 40.8188 23.1767C40.798 23.231 40.6623 23.4337 40.2807 23.6716Z"
          fill="white"
        />
      </svg>
    </IconWrapper>
  );
};
