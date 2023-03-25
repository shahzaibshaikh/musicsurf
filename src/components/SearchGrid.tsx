import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import useSearch from '../hooks/useSearch';
import { AlbumItems, ArtistItems } from '../store/slices/searchSlice';
import AlbumCard from './AlbumCard';
import ArtistCard from './ArtistCard';
import InitialSearch from './InitialSearch';

function SearchGrid(): JSX.Element {
  const { token } = useSelector((state: any) => state.spotify);

  const limit = 5;
  const { loading, error, data } = useSearch(token, limit);

  return (
    <Box className='grid-container'>
      {/* <InitialSearch /> */}

      {data?.albums && (
        <>
          <Heading fontSize='2xl' marginBottom={4}>
            Albums
          </Heading>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={6}>
            {data?.albums?.items.map((item: AlbumItems) => (
              <AlbumCard key={item.id} data={item} />
            ))}
          </SimpleGrid>
        </>
      )}

      {data?.artists && (
        <>
          <Heading fontSize='2xl' marginBottom={4}>
            Artists
          </Heading>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={6}>
            {data?.artists?.items.map((item: ArtistItems) => (
              <ArtistCard key={item.id} data={item} />
            ))}
          </SimpleGrid>
        </>
      )}
    </Box>
  );
}

export default SearchGrid;
