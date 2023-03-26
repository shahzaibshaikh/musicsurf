import { Box } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import useSpecificArtist from '../hooks/useSpecificArtist';

function ArtistDetailScreen() {
  const { token } = useSelector((state: any) => state.spotify);
  const { loading, data } = useSpecificArtist(token, 'PK');

  return <Box className='artist-grid-container'>Artist Detail Screen</Box>;
}

export default ArtistDetailScreen;
