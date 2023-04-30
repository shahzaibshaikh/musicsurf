import useSpecificAlbum from '../hooks/useSpecificAlbum';
import { SpecificAlbumState } from '../store/slices/specificAlbumSlice';
import AlbumDetailHeader from '../components/layout/AlbumDetailHeader';
import { Box, Divider } from '@chakra-ui/react';
import { useState } from 'react';
import { average } from 'color.js';
import TrackListing from '../components/layout/TrackListing';
import { useParams } from 'react-router-dom';
import AlbumDetailSkeleton from '../components/skeletons/AlbumDetailSkeleton';

function AlbumDetailScreen() {
  const { albumID } = useParams();
  const token: string | null = localStorage.getItem('token') ?? '';
  const { loading, data }: SpecificAlbumState = useSpecificAlbum(token, albumID);
  let colorGenerator: string;
  const [color, setColor] = useState('');
  let count: number = 0;

  data?.images &&
    average(data?.images[0]?.url, { amount: 1 }).then(color => {
      colorGenerator = `rgb(${color[0]},${color[1]},${color[2]}, 0.6)`;
      setColor(colorGenerator);
    });

  return (
    <>
      {loading ? (
        <AlbumDetailSkeleton />
      ) : (
        <Box
          className='album-grid-container'
          background={`linear-gradient(180deg, ${color} 0%, rgba(18, 18, 18, 1) 100%)`}
        >
          {data && <AlbumDetailHeader data={data} />}
          {data?.tracks && <TrackListing data={data.tracks.items} count={count} />}

          <Divider color='#121212' marginTop='80px' marginBottom='40px' />
        </Box>
      )}
    </>
  );
}

export default AlbumDetailScreen;
