import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay
} from '@chakra-ui/react';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

function MenuDrawer({ isOpen, onClose }: MenuDrawerProps) {
  return (
    <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Drawer Title</DrawerHeader>

        <DrawerBody>Hello.</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default MenuDrawer;
