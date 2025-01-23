import {IconWrapper} from '../Icon.style';

export const Kanban = ({...rest}) => {
  // Add this for icons with fill
  const iconWeight = {...rest}.$defaultWeight ? 0 : {...rest}.$weight;

  return (
    <IconWrapper $hasFill={false} {...rest} $weight={iconWeight}>
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_32_15110)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 20.7348C0 22.5378 1.53244 23.9994 3.42279 23.9994H21.5147C23.4051 23.9994 24.9375 22.5378 24.9375 20.7348V3.26852C24.9375 1.46552 23.4051 0.00390625 21.5147 0.00390625H3.42279C1.53244 0.00390625 0 1.46552 0 3.26852V20.7348Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.93384 19.8244C2.93384 20.5971 3.5906 21.2235 4.40075 21.2235H6.35663C7.16678 21.2235 7.82354 20.5971 7.82354 19.8244V3.96772C7.82354 3.19501 7.16678 2.5686 6.35663 2.5686H4.40075C3.5906 2.5686 2.93384 3.19501 2.93384 3.96772V19.8244Z"
            fill="#ED230D"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.0239 19.8244C10.0239 20.5971 10.6807 21.2235 11.4908 21.2235H13.4467C14.2569 21.2235 14.9136 20.5971 14.9136 19.8244V3.96772C14.9136 3.19501 14.2569 2.5686 13.4467 2.5686H11.4908C10.6807 2.5686 10.0239 3.19501 10.0239 3.96772V19.8244Z"
            fill="#FCB827"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.3585 19.8244C17.3585 20.5971 18.0153 21.2235 18.8254 21.2235H20.7813C21.5915 21.2235 22.2482 20.5971 22.2482 19.8244V3.96772C22.2482 3.19501 21.5915 2.5686 20.7813 2.5686H18.8254C18.0153 2.5686 17.3585 3.19501 17.3585 3.96772V19.8244Z"
            fill="#00A1FE"
          />
        </g>
        <defs>
          <clipPath id="clip0_32_15110">
            <rect width="25" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </IconWrapper>
  );
};
