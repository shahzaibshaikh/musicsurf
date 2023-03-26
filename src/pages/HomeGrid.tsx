import { Box, Divider, Heading, SimpleGrid } from '@chakra-ui/react';
import HomeCard from '../components/cards/HomeCard';
import useAlbums from '../hooks/useAlbums';
import { useSelector } from 'react-redux';
import { Albums, AlbumState } from '../store/slices/albumSlice';
import HomeCardSkeleton from '../components/skeletons/HomeCardSkeleton';

function HomeGrid(): JSX.Element {
  const { token } = useSelector((state: any) => state.spotify);
  const { loading, error, data } = useAlbums<AlbumState>(token, 40, 'PK');
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Box className='main-grid-container'>
      <Heading fontSize='2xl' marginBottom={4} color='white'>
        New Releases
      </Heading>

      {loading ? (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={6}>
          {skeletons.map(skeleton => (
            <HomeCardSkeleton key={skeleton} />
          ))}
        </SimpleGrid>
      ) : (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={6}>
          {data &&
            data?.albums?.items?.map((item: Albums) => (
              <HomeCard key={item.id} data={item} />
            ))}
        </SimpleGrid>
      )}

      <Divider color='#121212' marginTop='80px' marginBottom='40px' />
    </Box>
  );
}

export default HomeGrid;
