import {IconWrapper} from '../Icon.style';

export const FileUpload = ({...rest}) => {
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
        <path
          d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0209 0 14.55 0 14V12C0 11.7167 0.0958333 11.4792 0.2875 11.2875C0.479167 11.0959 0.716667 11 1 11C1.28333 11 1.52083 11.0959 1.7125 11.2875C1.90417 11.4792 2 11.7167 2 12V14H14V12C14 11.7167 14.0958 11.4792 14.2875 11.2875C14.4792 11.0959 14.7167 11 15 11C15.2833 11 15.5208 11.0959 15.7125 11.2875C15.9042 11.4792 16 11.7167 16 12V14C16 14.55 15.8042 15.0209 15.4125 15.4125C15.0208 15.8042 14.55 16 14 16H2ZM7 3.85005L5.125 5.72505C4.925 5.92505 4.6875 6.02088 4.4125 6.01255C4.1375 6.00422 3.9 5.90005 3.7 5.70005C3.51667 5.50005 3.42083 5.26672 3.4125 5.00005C3.40417 4.73338 3.5 4.50005 3.7 4.30005L7.3 0.700049C7.4 0.600049 7.50833 0.529215 7.625 0.487549C7.74167 0.445882 7.86667 0.425049 8 0.425049C8.13333 0.425049 8.25833 0.445882 8.375 0.487549C8.49167 0.529215 8.6 0.600049 8.7 0.700049L12.3 4.30005C12.5 4.50005 12.5958 4.73338 12.5875 5.00005C12.5792 5.26672 12.4833 5.50005 12.3 5.70005C12.1 5.90005 11.8625 6.00422 11.5875 6.01255C11.3125 6.02088 11.075 5.92505 10.875 5.72505L9 3.85005V11C9 11.2834 8.90417 11.5209 8.7125 11.7125C8.52083 11.9042 8.28333 12 8 12C7.71667 12 7.47917 11.9042 7.2875 11.7125C7.09583 11.5209 7 11.2834 7 11V3.85005Z"
          fill="black"
        />
      </svg>
    </IconWrapper>
  );
};
