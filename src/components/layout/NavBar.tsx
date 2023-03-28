import { HStack, Image, Show } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import LogoIcon from '../../assets/favicon.svg';
import SearchInput from '../common/SearchInput';

function NavBar(): JSX.Element {
  const location = useLocation();

  const shouldRenderSearchInput =
    !location.pathname.split('/')[2] && location.pathname.split('/')[1] === 'search';

  return (
    <HStack className='nav-styles' spacing={5}>
      <Show breakpoint='(max-width: 992px)'>
        <Image src={LogoIcon} height='35px' />
      </Show>

      {shouldRenderSearchInput && <SearchInput />}
    </HStack>
  );
}

export default NavBar;
