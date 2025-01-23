import {IconWrapper} from '../Icon.style';

export const Download = ({...rest}) => {
  // Add this for icons with fill
  const iconWeight = {...rest}.$defaultWeight ? 0 : {...rest}.$weight;

  return (
    <IconWrapper $hasFill={true} {...rest} $weight={iconWeight}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 15V12C18 11.8011 17.921 11.6103 17.7803 11.4697C17.6397 11.329 17.4489 11.25 17.25 11.25C17.0511 11.25 16.8603 11.329 16.7197 11.4697C16.579 11.6103 16.5 11.8011 16.5 12V15C16.5 15.1989 16.421 15.3897 16.2803 15.5303C16.1397 15.671 15.9489 15.75 15.75 15.75H2.25C2.05109 15.75 1.86032 15.671 1.71967 15.5303C1.57902 15.3897 1.5 15.1989 1.5 15V12C1.5 11.8011 1.42098 11.6103 1.28033 11.4697C1.13968 11.329 0.948912 11.25 0.75 11.25C0.551088 11.25 0.360322 11.329 0.21967 11.4697C0.0790178 11.6103 0 11.8011 0 12V15C0 15.5967 0.237053 16.169 0.65901 16.591C1.08097 17.0129 1.65326 17.25 2.25 17.25H15.75C16.3467 17.25 16.919 17.0129 17.341 16.591C17.7629 16.169 18 15.5967 18 15ZM13.215 11.085L9.465 14.085C9.33259 14.1896 9.16876 14.2465 9 14.2465C8.83124 14.2465 8.66741 14.1896 8.535 14.085L4.785 11.085C4.64836 10.956 4.56511 10.7805 4.55173 10.593C4.53834 10.4056 4.59578 10.22 4.7127 10.0729C4.82962 9.92583 4.99749 9.82798 5.18309 9.79874C5.3687 9.7695 5.55852 9.81098 5.715 9.915L8.25 11.94V1.5C8.25 1.30109 8.32902 1.11032 8.46967 0.96967C8.61032 0.829018 8.80109 0.75 9 0.75C9.19891 0.75 9.38968 0.829018 9.53033 0.96967C9.67098 1.11032 9.75 1.30109 9.75 1.5V11.94L12.285 9.915C12.3605 9.84371 12.45 9.78888 12.5478 9.75399C12.6457 9.7191 12.7497 9.70491 12.8533 9.71231C12.9569 9.71971 13.0578 9.74854 13.1496 9.79698C13.2415 9.84542 13.3223 9.91242 13.3869 9.99372C13.4516 10.075 13.4986 10.1689 13.5251 10.2693C13.5515 10.3697 13.5568 10.4745 13.5407 10.5771C13.5245 10.6797 13.4872 10.7778 13.4312 10.8653C13.3751 10.9527 13.3015 11.0275 13.215 11.085Z"
          fill="#D0E1F0"
        />
      </svg>
    </IconWrapper>
  );
};
