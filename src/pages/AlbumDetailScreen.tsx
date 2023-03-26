import { useSelector } from 'react-redux';
import useSpecificAlbum from '../hooks/useSpecificAlbum';
import { SpecificAlbumState } from '../store/slices/specificAlbumSlice';
import AlbumDetailHeader from '../components/layout/AlbumDetailHeader';
import TrackCard from '../components/cards/TrackCard';
import { Box, Divider } from '@chakra-ui/react';
import { useState } from 'react';
import { average } from 'color.js';

function AlbumDetailScreen() {
  const { token } = useSelector((state: any) => state.spotify);
  const { loading, data }: SpecificAlbumState = useSpecificAlbum(token);
  let colorGenerator: string;
  const [color, setColor] = useState('');
  let count: number = 0;

  data?.images &&
    average(data?.images[0]?.url, { amount: 1 }).then(color => {
      console.log(color);
      colorGenerator = `rgb(${color[0]},${color[1]},${color[2]})`;
      setColor(colorGenerator);
    });

  return (
    <Box
      className='album-grid-container'
      background={`linear-gradient(180deg, ${color} 0%, rgba(18, 18, 18, 1) 100%)`}
    >
      {data && <AlbumDetailHeader data={data} />}

      <Divider color='#121212' marginTop='80px' marginBottom='40px' />
      <Box marginTop={-6}>
        {data?.tracks &&
          data?.tracks?.items.map(item => {
            count++;
            return <TrackCard key={item.id} data={item} count={count} />;
          })}
      </Box>
      <Divider color='#121212' marginTop='80px' marginBottom='40px' />
    </Box>
  );
}

export default AlbumDetailScreen;
