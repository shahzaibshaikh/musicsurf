import { Button, HStack, Image, Show } from '@chakra-ui/react';
import LogoIcon from '../../assets/favicon.svg';
import SearchInput from '../common/SearchInput';

function NavBar(): JSX.Element {
  return (
    <HStack className='nav-styles' spacing={5}>
      <Show breakpoint='(max-width: 992px)'>
        <Image src={LogoIcon} height='35px' />
      </Show>

      {window.location.pathname === '/search' && <SearchInput />}

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
  );
}

export default NavBar;
