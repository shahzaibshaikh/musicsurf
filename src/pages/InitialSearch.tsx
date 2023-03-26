import { Box, HStack, Text } from '@chakra-ui/react';
import { BsSearchHeart } from 'react-icons/bs';

function InitialSearch() {
  return (
    <Box className='grid-container' placeItems='center' position='relative' height='50vh'>
      <HStack
        position='absolute'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%)'
        gap={4}
      >
        <BsSearchHeart size='40px' />
        <Text fontSize='2xl' fontWeight={700}>
          Browse for albums, tracks, artists & playlists
        </Text>
      </HStack>
    </Box>
  );
}

export default InitialSearch;
