import { Box, Button } from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';

function LandingScreen() {
  return (
    <Box
      width='100vw'
      height='100vh'
      background='coral'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <Button>Enter Spotify</Button>
    </Box>
  );
}

export default LandingScreen;
