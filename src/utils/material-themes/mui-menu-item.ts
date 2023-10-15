import { Colors } from '../../constants/colors';

export const MenuItemThem = {
  styleOverrides: {
    root: {
      '&:not(:last-child)': {
        borderBottom: `0.25px solid ${Colors.Grundge}`,
      },

      '&:hover:not(.Mui-disabled):not(.Mui-selected)': {
        backgroundColor: '#f6f6f6',
      },
      // '&.Mui-selected': {
      //   backgroundColor: Colors.LightPrimary,
      // },
      // '&.Mui-focusVisible': {
      //   backgroundColor: Colors.LightPrimary,
      // },
    },
  },
};
