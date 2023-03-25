import { Box, HStack, Text } from '@chakra-ui/react';
import { BsSearchHeart } from 'react-icons/bs';

function InitialSearch() {
  return (
    <Box className='grid-container' placeItems='center' position='relative' height='50vh'>
      <HStack position='absolute' top='50%' left='50%' transform='translate(-50%, -50%)'>
        <BsSearchHeart size={60} />
        <Text fontSize='2xl' fontWeight={700}>
          Browse for albums, tracks & artists
        </Text>
      </HStack>
    </Box>
  );
}

export default InitialSearch;
