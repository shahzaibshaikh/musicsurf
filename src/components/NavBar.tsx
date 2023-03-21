import { Box, Button, HStack, Image, Show } from '@chakra-ui/react';
import BrandImage from '../assets/bitmap.svg';
import SearchInput from './SearchInput';

function NavBar(): JSX.Element {
  return (
    <HStack className='nav-styles'>
      <HStack>
        <Image src={BrandImage} height='25px' marginRight='50px' />
        <Show above='md'>
          {window.location.pathname === '/search' ? <SearchInput /> : null}
        </Show>
      </HStack>
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
