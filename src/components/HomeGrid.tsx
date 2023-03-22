import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import HomeCard from './HomeCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbums } from '../store/actions/album';
import { useEffect } from 'react';

function HomeGrid(): JSX.Element {
  const { loading, error, data } = useSelector((state: any) => state.albums);
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

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
