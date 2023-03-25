import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import HomeCard from './HomeCard';
import useAlbums from '../hooks/useAlbums';
import { Albums } from '../store/slices/albumSlice';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function HomeGrid(): JSX.Element {
  const { token } = useSelector((state: any) => state.spotify);
  const { loading, error, data } = useAlbums(token);
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
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />

        {/* {data.items.map((item: Albums) => (
          <HomeCard data={item} />
        ))} */}
      </SimpleGrid>
      <hr className='line' />
    </Box>
  );
}

export default HomeGrid;
