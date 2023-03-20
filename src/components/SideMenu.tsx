import { Box, HStack, Icon, Link, List, ListItem, Text } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { SiGooglehome } from 'react-icons/si';
import { FaSearch } from 'react-icons/fa';
import { IoLibrary } from 'react-icons/io5';

const menuOptions = [
  { id: 1, name: 'Home', path: '/', icon: SiGooglehome },
  { id: 2, name: 'Search', path: '/search', icon: FaSearch },
  { id: 3, name: 'Your Library', path: '/library', icon: IoLibrary }
];

function SideMenu(): JSX.Element {
  return (
    <Box
      height='90vh'
      paddingTop={8}
      fontWeight={600}
      fontSize={13}
      background='black'
      position='fixed'
      top='10vh'
    >
      <List paddingLeft={7} paddingRight={24} spacing={5}>
        {menuOptions.map(option => (
          <ListItem key={option.id}>
            <Link as={ReactLink} to={option.path} _hover={{ textDecoration: 'none' }}>
              <HStack
                spacing={5}
                color='gray.300'
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
