import TrackListing from '../components/layout/TrackListing';
import { Box, Divider } from '@chakra-ui/react';
import { useState } from 'react';
import { average } from 'color.js';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useSpecificPlaylist from '../hooks/useSpecificPlaylist';
import ArtistDetailHeader from '../components/layout/ArtistDetailHeader';
import PlaylistDetailHeader from '../components/layout/PlaylistDetailHeader';
import PlaylistDetailSkeleton from '../components/skeletons/PlaylistDetailSkeleton';

function PlaylistDetailScreen() {
  const { playlistID } = useParams();
  const token: string | null = localStorage.getItem('token') ?? '';
  const { loading, data } = useSpecificPlaylist(token, playlistID);
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
        <PlaylistDetailSkeleton />
      ) : (
        <Box
          className='playlist-grid-container'
          background={`linear-gradient(180deg, ${color} 0%, rgba(18, 18, 18, 1) 100%)`}
        >
          {data && <PlaylistDetailHeader data={data} />}
          {data?.tracks && (
            <TrackListing
              data={data?.tracks?.items}
              count={count}
              variant='playlist-listing'
            />
          )}

          <Divider color='#121212' marginTop='80px' marginBottom='40px' />
        </Box>
      )}
    </>
  );
}

export default PlaylistDetailScreen;
