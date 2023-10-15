import { SvgIcon, SvgIconProps } from '@mui/material';

export const Checked = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="1"
          width="16"
          height="16"
          rx="4"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect x="4" y="4" width="10" height="10" rx="2" fill="currentColor" />
      </svg>
    </SvgIcon>
  );
};
