import React from 'react';
import { Box } from '@mui/system';
// import { RotatingLines } from 'react-loader-spinner';
// import { Colors } from '../../constants/colors';

const Loading: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        zIndex: 500,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        bgcolor: '#e9e8e870',
      }}
    >
      {/* <RotatingLines
        strokeColor={Colors.Primary}
        strokeWidth="5"
        animationDuration="0.75"
        width="100"
        visible={true}
      /> */}
    </Box>
  );
};
export default Loading;
