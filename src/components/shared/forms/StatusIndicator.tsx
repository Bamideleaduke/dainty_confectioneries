import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { SxProps, Theme } from '@mui/material';
interface StatusIndicatorProps {
   sx?: SxProps<Theme>;
}
export const StatusIndicator: React.FC<StatusIndicatorProps> = (props) => {
   return (
      <FiberManualRecordIcon
         sx={{
            color: 'primary.main',
            width: '8px',
            height: '10px',
            ml: 0.2,
            ...props.sx,
         }}
      />
   );
};
