import { Box } from '@chakra-ui/react';
import { average } from 'color.js';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AlbumSearchDisplay from '../components/layout/AlbumSearchDisplay';
import ArtistDetailHeader from '../components/layout/ArtistDetailHeader';
import ArtistSearchDisplay from '../components/layout/ArtistSearchDisplay';
import TrackListing from '../components/layout/TrackListing';
import useSpecificArtist from '../hooks/useSpecificArtist';
import { SpecificArtistState } from '../store/slices/specificArtistSlice';

function ArtistDetailScreen() {
  const { artistID } = useParams();
  const { token } = useSelector((state: any) => state.spotify);
  const { loading, data }: SpecificArtistState = useSpecificArtist(
    token,
    artistID,
    'PK',
    5
  );
  let colorGenerator: string;
  const [color, setColor] = useState('');
  let count: number = 0;

  data?.artist_data &&
    average(data?.artist_data?.images[0]?.url, { amount: 1 }).then(color => {
      colorGenerator = `rgb(${color[0]},${color[1]},${color[2]})`;
      setColor(colorGenerator);
    });

  return (
    <>
      {data?.artist_data && <ArtistDetailHeader data={data?.artist_data} />}
      <Box
        className='artist-grid-container'
        background={`linear-gradient(180deg, ${color} 0%, rgba(18, 18, 18, 1) 100%)`}
      >
        {data?.artist_toptracks && (
          <TrackListing
            count={count}
            data={data?.artist_toptracks}
            variant='artist-listing'
          />
        )}

        {data?.artist_albums && (
          <AlbumSearchDisplay variant='artist-listing' data={data?.artist_albums} />
        )}

        {data?.related_artists && (
          <ArtistSearchDisplay variant='artist-listing' data={data?.related_artists} />
        )}
      </Box>
    </>
  );
}

export default ArtistDetailScreen;
