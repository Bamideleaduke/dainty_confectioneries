import { Colors } from '../../constants/colors';

export const TooltipTheme = {
  styleOverrides: {
    tooltip: {
      margin: 0,
      boxShadow: '0 1px 5px rgb(0 0 0 / 0.2)',
      fontSize: '12px',
      backgroundColor: 'white',
      color: Colors.TextGray,
      '.MuiTooltip-popper[data-popper-placement*="top"] &': {
        marginBottom: '4px',
        padding: '0.5rem 0.8rem',
      },
    },
    arrow: { '&:before': { backgroundColor: 'white' } },
  },
};
