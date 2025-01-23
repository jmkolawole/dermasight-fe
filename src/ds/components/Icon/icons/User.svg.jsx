import {IconWrapper} from '../Icon.style';

export const User = ({...rest}) => {
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
          d="M12 11.6806C14.9352 11.6806 17.3232 9.29258 17.3232 6.35738C17.3232 3.42218 14.9352 1.03418 12 1.03418C9.06476 1.03418 6.67676 3.42218 6.67676 6.35738C6.67676 9.29258 9.06476 11.6806 12 11.6806ZM12 1.75418C14.5392 1.75418 16.6032 3.81818 16.6032 6.35738C16.6032 8.89658 14.5392 10.9606 12 10.9606C9.46076 10.9606 7.39676 8.89658 7.39676 6.35738C7.39676 3.81818 9.46076 1.75418 12 1.75418Z"
          fill="#014F86"
        />
        <path
          d="M4.53839 22.7735H19.464C19.9224 22.7735 20.3568 22.5743 20.6568 22.2239C20.9496 21.8807 21.0792 21.4295 21.0096 20.9879C20.3088 16.5311 16.5216 13.2959 12.0024 13.2959C7.48319 13.2959 3.69599 16.5311 2.99519 20.9879C2.92559 21.4295 3.05279 21.8807 3.34799 22.2239C3.64559 22.5743 4.07999 22.7735 4.54079 22.7735H4.53839ZM3.70559 21.1007C4.35119 16.9967 7.83839 14.0159 12.0024 14.0159C16.1664 14.0159 19.6536 16.9943 20.2992 21.1007C20.3376 21.3383 20.2704 21.5711 20.112 21.7559C19.9512 21.9455 19.716 22.0535 19.4664 22.0535H4.53839C4.29119 22.0535 4.05599 21.9455 3.89279 21.7559C3.73439 21.5711 3.66719 21.3383 3.70559 21.1007Z"
          fill="#014F86"
        />
      </svg>
    </IconWrapper>
  );
};
