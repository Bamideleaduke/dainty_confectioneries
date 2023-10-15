import { Colors } from '../../constants/colors';

export const InputTheme = {
  styleOverrides: {
    input: {},
  },
};
export const InputBaseTheme = {
  styleOverrides: {
    root: {
      '&.MuiOutlinedInput-root': {
        '& input': { padding: '10px 15px' },
        padding: '0px',
        // borderRadius: '15px',
        borderColor: Colors.Grundge,
        '& fieldset': {
          padding: '0px',
          borderColor: Colors.Grundge,
        },
        '&:hover fieldset': {
          borderColor: Colors.Grundge,
          boxShadow: 'unset',
        },
        '&.Mui-focused fieldset': {
          borderColor: Colors.Grundge,
          boxShadow: 'unset',
        },
        '& fieldset:after ': {
          borderColor: 'red',
        },
        '& ::placeholder': { color: Colors.TextGray },
        '&:hover:not(.Mui-disabled):before': {
          borderColor: Colors.Grundge,
        },

        '&.Mui-error:after': {
          borderColor: Colors.Danger,
        },
      },
      // '& .MuiFilledInput-root': {
      //   '& fieldset': {
      //     borderColor: Colors.Primary,
      //   },
      //   '&:hover fieldset': {
      //     borderColor: Colors.Primary, // Change this to your desired color
      //   },
      //   '&.Mui-focused fieldset': {
      //     borderColor: Colors.Primary, // Change this to your desired color
      //   },
      // },
    },
  },
};
