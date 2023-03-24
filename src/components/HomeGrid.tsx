import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import HomeCard from './HomeCard';
import { useSelector } from 'react-redux';

import useAlbums from '../hooks/useAlbums';

function HomeGrid(): JSX.Element {
  const { loading, error, data } = useAlbums();

  return (
    <Box className='main-grid-container'>
      <Heading fontSize='2xl' marginBottom={4}>
        New Releases
      </Heading>

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={6}>
        <HomeCard />
      </SimpleGrid>
      <hr className='line' />
    </Box>
  );
}

export default HomeGrid;
