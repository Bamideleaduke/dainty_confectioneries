import { SvgIcon, SvgIconProps } from "@mui/material";

export const ProfileIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.3335 21.5V20.5C4.3335 17.1863 7.01979 14.5 10.3335 14.5H14.3335C17.6472 14.5 20.3335 17.1863 20.3335 20.5V21.5"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M12.3335 11.5C10.1244 11.5 8.3335 9.70914 8.3335 7.5C8.3335 5.29086 10.1244 3.5 12.3335 3.5C14.5426 3.5 16.3335 5.29086 16.3335 7.5C16.3335 9.70914 14.5426 11.5 12.3335 11.5Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </SvgIcon>
  );
};
