import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Icon,
  IconButton,
  Link,
  List,
  Text,
  ListItem
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { SiGooglehome } from 'react-icons/si';
import { TbCategory } from 'react-icons/tb';

const menuOptions = [
  { id: 1, name: 'Home', slug: 'home', path: '/', icon: SiGooglehome },
  { id: 2, name: 'Search', slug: 'search', path: '/search', icon: FaSearch },
  {
    id: 3,
    name: 'Categories',
    slug: 'categories',
    path: '/categories',
    icon: TbCategory
  }
  // { id: 4, name: 'Your Library', slug: 'library', path: '/library', icon: IoLibrary }
];

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

function MenuDrawer({ isOpen, onClose }: MenuDrawerProps) {
  return (
    <Drawer isOpen={isOpen} placement='right' onClose={onClose} size='xs'>
      <DrawerOverlay />
      <DrawerContent background='rgba(0, 0, 0, 0.4)' backdropFilter='blur(8px)'>
        <DrawerCloseButton
          marginRight={4}
          marginTop={2}
          height='40px'
          border='1px solid white'
          width='30px'
          as={IconButton}
          borderRadius='50%'
          variant='outline'
          colorScheme='white'
          aria-label='Go back'
          icon={<IoIosArrowBack />}
        />

        <DrawerBody>
          <Box className='menu-drawer-container'>
            <List paddingLeft={3} spacing={5} marginTop={20}>
              {menuOptions.map(option => (
                <ListItem key={option.id}>
                  <Link
                    onClick={onClose}
                    as={ReactLink}
                    to={option.path}
                    _hover={{ textDecoration: 'none' }}
                  >
                    <HStack spacing={5} color='white'>
                      <Icon as={option.icon} boxSize={5} />
                      <Text>{option.name}</Text>
                    </HStack>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default MenuDrawer;
