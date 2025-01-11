import * as React from 'react';
import LinearProgress, {
  LinearProgressProps,
} from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export function LinearProgressWithLabel({
  displayValue,
  ...props
}: LinearProgressProps & {
  value: number;
  label: string;
  displayValue: number | string;
}) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress
          sx={{
            outline: 1,
            backgroundColor: 'transparent',
          }}
          variant='determinate'
          {...props}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
          {displayValue}
        </Typography>
      </Box>
      <Box sx={{ position: 'absolute' }}>
        <Typography
          variant='body2'
          sx={{ color: 'text.secondary', marginLeft: 2, fontWeight: 'bold' }}
        >
          {props.label}
        </Typography>
      </Box>
    </Box>
  );
}
