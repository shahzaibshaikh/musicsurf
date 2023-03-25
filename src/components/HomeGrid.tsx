import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import HomeCard from './HomeCard';
import useAlbums from '../hooks/useAlbums';
import { useSelector } from 'react-redux';
import { AlbumData, Albums, AlbumState } from '../store/slices/albumSlice';

function HomeGrid(): JSX.Element {
  const { token } = useSelector((state: any) => state.spotify);
  const { loading, error, data } = useAlbums<AlbumState>(token);

  return (
    <Box className='main-grid-container'>
      <Heading fontSize='2xl' marginBottom={4}>
        New Releases
      </Heading>

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={6}>
        {data &&
          data?.albums?.items?.map((item: Albums) => (
            <HomeCard key={item.id} data={item} />
          ))}
      </SimpleGrid>
      <hr className='line' />
    </Box>
  );
}

export default HomeGrid;
