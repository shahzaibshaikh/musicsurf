import { useSelector } from 'react-redux';
import useSpecificAlbum from '../hooks/useSpecificAlbum';
import { SpecificAlbumState } from '../store/slices/specificAlbumSlice';
import AlbumDetailHeader from '../components/layout/AlbumDetailHeader';
import TrackCard from '../components/cards/TrackCard';
import { Box } from '@chakra-ui/react';
import getMainColor from '../utilities/getMainColor';
import { useState } from 'react';

function AlbumDetailScreen() {
  const { token } = useSelector((state: any) => state.spotify);
  const { loading, data }: SpecificAlbumState = useSpecificAlbum(token);
  const [color, setColor] = useState('');
  let count: number = 0;
  data?.images &&
    getMainColor(data?.images[0]?.url)
      .then((mainColor: string) => setColor(mainColor))
      .catch(error => {
        return error;
      });

  return (
    <Box
      className='album-grid-container'
      background={`linear-gradient(180deg, ${color} 0%, rgba(18, 18, 18, 1) 100%)`}
    >
      {data && <AlbumDetailHeader data={data} />}

      <hr className='line' />
      <Box marginTop={-6}>
        {data?.tracks &&
          data?.tracks?.items.map(item => {
            count++;
            return <TrackCard key={item.id} data={item} count={count} />;
          })}
      </Box>
      <hr className='line' />
    </Box>
  );
}

export default AlbumDetailScreen;
