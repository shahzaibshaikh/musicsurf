import { HStack, Image, Link, Show } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { IconButton } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import LogoIcon from "../../assets/favicon.svg";
import { useNavigate } from "react-router-dom";
import SearchInput from "../common/SearchInput";
import { IoIosArrowBack } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import MenuDrawer from "./MenuDrawer";

function NavBar(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function handleDrawerOpen() {
    setIsDrawerOpen(true);
  }

  function handleDrawerClose() {
    setIsDrawerOpen(false);
  }

  function handleGoBack() {
    navigate(-1);
  }

  const shouldRenderSearchInput =
    !location.pathname.split("/")[2] && location.pathname.split("/")[1] === "search";

  const shouldRenderBackButton = location.pathname.split("/")[2] && true;

  return (
    <>
      <HStack className='nav-styles' spacing={5}>
        <HStack gap={3} width='100vw'>
          <Show breakpoint='(max-width: 992px)'>
            <Link as={ReactLink} to='/'>
              <Image src={LogoIcon} height='35px' />
            </Link>
          </Show>

          {shouldRenderSearchInput && <SearchInput />}
          {shouldRenderBackButton && (
            <IconButton
              onClick={handleGoBack}
              color='white'
              borderColor='white'
              borderRadius='50%'
              variant='outline'
              colorScheme='white'
              aria-label='Go back'
              icon={<IoIosArrowBack color='white' />}
            />
          )}
        </HStack>

        <IconButton
          onClick={handleDrawerOpen}
          borderRadius='50%'
          borderColor='white'
          variant='outline'
          color='white'
          colorScheme='white'
          aria-label='Collapsible'
          icon={<RxHamburgerMenu color='white' />}
        />
      </HStack>
      <MenuDrawer isOpen={isDrawerOpen} onClose={handleDrawerClose} />
    </>
  );
}

export default NavBar;
