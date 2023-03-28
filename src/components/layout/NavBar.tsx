import { HStack, Image, Show } from '@chakra-ui/react';
import LogoIcon from '../../assets/favicon.svg';
import SearchInput from '../common/SearchInput';

function NavBar(): JSX.Element {
  return (
    <HStack className='nav-styles' spacing={5}>
      <Show breakpoint='(max-width: 992px)'>
        <Image src={LogoIcon} height='35px' />
      </Show>

      {!window.location.pathname.split('/')[2] &&
        window.location.pathname.split('/')[1] === 'search' && <SearchInput />}
    </HStack>
  );
}

export default NavBar;
