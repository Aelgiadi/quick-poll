'use client';
import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  components: {
    // Name of the component
    MuiLinearProgress: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          background: 'transparent',
          outline: '1px solid',
          outlineColor: '#1976d2',
        },
      },
    },
  },
});

export default theme;
