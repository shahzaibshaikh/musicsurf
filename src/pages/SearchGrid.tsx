import { Box } from '@chakra-ui/react';
import useSearch from '../hooks/useSearch';
import InitialSearch from './InitialSearch';
import SongsSearchDisplay from '../components/layout/SongsSearchDisplay';
import AlbumSearchDisplay from '../components/layout/AlbumSearchDisplay';
import ArtistSearchDisplay from '../components/layout/ArtistSearchDisplay';
import PlaylistSearchDisplay from '../components/layout/PlaylistSearchDisplay';

function SearchGrid(): JSX.Element {
  const token: string | null = localStorage.getItem('token') ?? '';

  const limit = 5;
  const { loading, data } = useSearch(token, limit);

  return (
    <Box className='grid-container'>
      {!data && <InitialSearch />}
      {data?.tracks && <SongsSearchDisplay data={data?.tracks} />}
      {data?.albums && <AlbumSearchDisplay data={data?.albums} />}
      {data?.artists && <ArtistSearchDisplay data={data?.artists?.items} />}
      {data?.playlists && <PlaylistSearchDisplay data={data?.playlists} />}
    </Box>
  );
}

export default SearchGrid;
