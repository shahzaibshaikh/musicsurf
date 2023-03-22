import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import HomeCard from './HomeCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbums } from '../store/actions/album';
import { useEffect } from 'react';
import { AlbumData } from '../store/slices/albumSlice';

function HomeGrid(): JSX.Element {
  const { loading, error, data } = useSelector((state: any) => state.albums);
  const { token } = useSelector((state: any) => state.spotify);
  const dispatch = useDispatch<any>();
  useEffect(() => {
    if (token) dispatch(fetchAlbums(token));
  }, []);

  return (
    <Box className='main-grid-container'>
      <Heading fontSize='2xl' marginBottom={4}>
        New Releases
      </Heading>

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={6}>
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </SimpleGrid>
      <hr className='line' />
    </Box>
  );
}

export default HomeGrid;
