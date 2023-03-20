import { Box, Button, HStack, Image } from '@chakra-ui/react';
import BrandImage from '../assets/Spotify_Logo_RGB_White.png';

function NavBar() {
  return (
    <HStack
      padding='16px 28px'
      background='black'
      alignItems='center'
      justifyContent='space-between'
    >
      <Image src={BrandImage} height='40px' />
      <HStack>
        <Button borderRadius={20} padding={5} variant='ghost' fontSize={13}>
          Sign up
        </Button>
        <Button
          borderRadius={20}
          padding={5}
          variant='solid'
          background='white'
          color='black'
          fontSize={13}
        >
          Login
        </Button>
      </HStack>
    </HStack>
  );
}

export default NavBar;
