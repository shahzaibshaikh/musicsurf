import TrackListing from '../components/layout/TrackListing';
import { Box, Divider } from '@chakra-ui/react';
import { useState } from 'react';
import { average } from 'color.js';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PlaylistDetailScreen() {
  const { playlistID } = useParams();
  const { token } = useSelector((state: any) => state.spotify);
  let colorGenerator: string;
  const [color, setColor] = useState('');
  let count: number = 0;

  return (
    <Box
      className='playlist-grid-container'
      background={`linear-gradient(180deg, ${color} 0%, rgba(18, 18, 18, 1) 100%)`}
    >
      PlayList Detail Screen
      <Divider color='#121212' marginTop='80px' marginBottom='40px' />
    </Box>
  );
}

export default PlaylistDetailScreen;
