import { Box, HStack, Icon, Image, Link, List, ListItem, Text } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { SiGooglehome } from 'react-icons/si';
import { FaSearch } from 'react-icons/fa';
import { IoLibrary } from 'react-icons/io5';
import { TbCategory } from 'react-icons/tb';
import BrandImage from '../../assets/bitmap.svg';

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

interface SideMenuProps {
  setOnSearch: (page: string) => void;
  selectedPage: string;
}

function SideMenu({ setOnSearch, selectedPage }: SideMenuProps): JSX.Element {
  return (
    <Box className='side-menu-container'>
      <Link as={ReactLink} to='/'>
        <Image src={BrandImage} height='25px' marginTop={5} marginLeft={7} />
      </Link>
      <List paddingLeft={7} spacing={5} marginTop={14}>
        {menuOptions.map(option => (
          <ListItem key={option.id} onClick={() => setOnSearch(option.slug)}>
            <Link as={ReactLink} to={option.path} _hover={{ textDecoration: 'none' }}>
              <HStack
                spacing={5}
                color={option.slug === selectedPage ? 'white' : 'gray.300'}
                _hover={{ transition: '300ms', color: 'white' }}
              >
                <Icon as={option.icon} boxSize={5} />
                <Text>{option.name}</Text>
              </HStack>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default SideMenu;
