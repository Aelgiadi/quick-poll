import { Card, Box } from '@mui/material';

export const PollBase = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '90vh',
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card
        sx={{
          maxWidth: 0.9,
          width: '60vh',
        }}
        variant='elevation'
        elevation={0}
      >
        {children}
      </Card>
    </Box>
  );
};
