import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton
} from '@chakra-ui/react';
import { IoIosArrowBack } from 'react-icons/io';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

function MenuDrawer({ isOpen, onClose }: MenuDrawerProps) {
  return (
    <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent background='rgba(0, 0, 0, 0.2)' backdropFilter='blur(8px)'>
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
          <Box>Hello.</Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default MenuDrawer;
