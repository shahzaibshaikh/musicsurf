import { HStack, Image, Show } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import LogoIcon from '../../assets/favicon.svg';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../common/SearchInput';
import { IoIosArrowBack } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';

function NavBar(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  const shouldRenderSearchInput =
    !location.pathname.split('/')[2] && location.pathname.split('/')[1] === 'search';

  const shouldRenderBackButton = location.pathname.split('/')[2] && true;

  return (
    <HStack className='nav-styles' spacing={5}>
      <HStack gap={3} width='100vw'>
        <Show breakpoint='(max-width: 992px)'>
          <Image src={LogoIcon} height='35px' />
        </Show>

        {shouldRenderSearchInput && <SearchInput />}
        {shouldRenderBackButton && (
          <IconButton
            onClick={handleGoBack}
            borderRadius='50%'
            variant='outline'
            colorScheme='white'
            aria-label='Go back'
            icon={<IoIosArrowBack />}
          />
        )}
      </HStack>

      <IconButton
        borderRadius='50%'
        variant='outline'
        colorScheme='white'
        aria-label='Collapsible'
        icon={<RxHamburgerMenu />}
      />
    </HStack>
  );
}

export default NavBar;
