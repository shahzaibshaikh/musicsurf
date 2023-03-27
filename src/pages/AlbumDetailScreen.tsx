import { useSelector } from 'react-redux';
import useSpecificAlbum from '../hooks/useSpecificAlbum';
import { SpecificAlbumState } from '../store/slices/specificAlbumSlice';
import AlbumDetailHeader from '../components/layout/AlbumDetailHeader';
import TrackCard from '../components/cards/TrackCard';
import { Box, Divider, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import { average } from 'color.js';
import TrackListing from '../components/layout/TrackListing';

function AlbumDetailScreen() {
  const { token } = useSelector((state: any) => state.spotify);
  const { loading, data }: SpecificAlbumState = useSpecificAlbum(token);
  let colorGenerator: string;
  const [color, setColor] = useState('');
  let count: number = 0;

  data?.images &&
    average(data?.images[0]?.url, { amount: 1 }).then(color => {
      colorGenerator = `rgb(${color[0]},${color[1]},${color[2]})`;
      setColor(colorGenerator);
    });

  return (
    <Box
      className='album-grid-container'
      background={`linear-gradient(180deg, ${color} 0%, rgba(18, 18, 18, 1) 100%)`}
    >
      {data && <AlbumDetailHeader data={data} />}
      {data?.tracks && <TrackListing data={data.tracks.items} count={count} />}

      <Divider color='#121212' marginTop='80px' marginBottom='40px' />
    </Box>
  );
}

export default AlbumDetailScreen;
