import {IconWrapper} from '../Icon.style';

export const ChevronUp = ({...rest}) => (
  <IconWrapper {...rest}>
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 12L10 8L6 4"
        stroke="#212529"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="rotate(-90 8 8)"
      />
    </svg>
  </IconWrapper>
);
