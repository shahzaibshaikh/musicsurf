import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import useSearch from '../hooks/useSearch';
import {
  AlbumItems,
  ArtistItems,
  PlaylistItems,
  TrackItems
} from '../store/slices/searchSlice';
import AlbumCard from './AlbumCard';
import ArtistCard from './ArtistCard';
import InitialSearch from './InitialSearch';
import PlaylistCard from './PlaylistCard';
import SongsSearchDisplay from './SongsSearchDisplay';
import TrackCard from './TrackCard';

function SearchGrid(): JSX.Element {
  const { token } = useSelector((state: any) => state.spotify);

  const limit = 5;
  const { loading, data } = useSearch(token, limit);

  return (
    <Box className='grid-container'>
      {data === null && <InitialSearch />}

      {data?.tracks && <SongsSearchDisplay data={data.tracks} />}

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

      {data?.playlists && (
        <>
          <Heading fontSize='2xl' marginBottom={4}>
            Playlists
          </Heading>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={6}>
            {data?.playlists?.items.map((item: PlaylistItems) => (
              <PlaylistCard key={item.id} data={item} />
            ))}
          </SimpleGrid>
        </>
      )}
    </Box>
  );
}

export default SearchGrid;
