import {IconWrapper} from '../Icon.style';

export const File = ({...rest}) => {
  // Add this for icons with fill
  const iconWeight = {...rest}.$defaultWeight ? 0 : {...rest}.$weight;

  return (
    <IconWrapper $hasFill={true} {...rest} $weight={iconWeight}>
      <svg
        width="46"
        height="36"
        viewBox="0 0 46 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.02265 4.49993V4.49951C1.02265 2.29739 2.80455 0.499512 5.00015 0.499512H18.293L22.6466 4.85307L22.793 4.99951H23.0002H41.0002C43.199 4.99951 45.0002 6.80065 45.0002 8.99951V31.4995C45.0002 33.6984 43.199 35.4995 41.0002 35.4995H5.00015C2.8013 35.4995 1.00015 33.6984 1.00015 31.4995L1.02265 4.49993Z"
          fill="#E4E4E4"
          stroke="#6B7280"
        />
      </svg>
    </IconWrapper>
  );
};
