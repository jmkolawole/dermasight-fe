import {IconWrapper} from '../Icon.style';

export const NotAllowed = ({...rest}) => {
  // Add this for icons with fill
  const iconWeight = {...rest}.$defaultWeight ? 0 : {...rest}.$weight;

  return (
    <IconWrapper $hasFill={true} {...rest} $weight={iconWeight}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 11.9999C0 18.6167 5.38312 23.9999 11.9999 23.9999C18.6167 23.9999 23.9999 18.6167 23.9999 11.9999C23.9999 5.38312 18.6169 0 11.9999 0C5.38298 0 0 5.38312 0 11.9999ZM11.9999 21.854C6.56645 21.854 2.14604 17.4336 2.14604 11.9999C2.14604 9.66904 2.96125 7.52587 4.3194 5.83679L18.1631 19.6805C16.474 21.0386 14.331 21.854 11.9999 21.854ZM21.8538 11.9999C21.8538 14.3308 21.0386 16.474 19.6806 18.1631L5.83679 4.3194C7.52587 2.96125 9.66904 2.14604 11.9999 2.14604C17.4334 2.14604 21.8538 6.56645 21.8538 11.9999Z"
          fill="#DC2626"
        />
      </svg>
    </IconWrapper>
  );
};
