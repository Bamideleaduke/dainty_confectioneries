import * as React from 'react';
import { Dialog as MuiDialog, DialogProps as MuiDialogProps } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export interface DialogProps extends Omit<MuiDialogProps, 'maxWidth'> {
   open: boolean;
   handleClose: () => void;
   children: React.ReactNode;
   maxWidth?: number | string;
   minWidth?: number | string;
   minHeight?: number | string;
}
const Dialog: React.FC<DialogProps> = ({
   open,
   handleClose,
   title,
   children,
   maxWidth,
   minWidth,
   minHeight,
}) => {
   return (
      <div>
         <MuiDialog
            onClose={handleClose}
            open={open}
            PaperProps={{
               style: {
                  maxWidth,
                  minWidth: minWidth ?? '70%',
                  padding: '10px 20px',
                  overflow: 'hidden',
                  minHeight: minHeight ?? 'initial',
               },
            }}
            sx={{
               '& .MuiDialogContent-root': { padding: '10px 0px', marginTop: '12px' },
               '& .MuiBackdrop-root': {
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  borderBottom: 'unset',
               },
            }}
         >
            <DialogTitle
               sx={{
                  fontWeight: 'bold',
                  m: 0,
                  pt: 2,
                  pb: 0.6,
                  px: 0,
                  borderBottom: '1px solid rgba(204, 204, 204, 1)',
               }}
            >
               {title}
               <IconButton onClick={handleClose} sx={{ position: 'absolute', right: 8, top: 8 }}>
                  <CloseIcon />
               </IconButton>
            </DialogTitle>
            <DialogContent>{children}</DialogContent>
         </MuiDialog>
      </div>
   );
};
export default React.memo(Dialog);
