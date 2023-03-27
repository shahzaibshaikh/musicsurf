import { Box, Image, Text } from '@chakra-ui/react';
import { average } from 'color.js';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import PopularityBadge from '../components/common/PopularityBadge';
import TrackListing from '../components/layout/TrackListing';
import useSpecificArtist from '../hooks/useSpecificArtist';
import { SpecificArtistState } from '../store/slices/specificArtistSlice';

function ArtistDetailScreen() {
  const { token } = useSelector((state: any) => state.spotify);
  const { loading, data }: SpecificArtistState = useSpecificArtist(token, 'PK');
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
      <Box position='relative' height='400px'>
        <Image
          src={data?.artist_data?.images[0]?.url}
          height='100%'
          w='100%'
          objectFit='cover'
        />
        <Box position='absolute' top='20%' left='0' className='grid-container'>
          {data?.artist_data?.name && (
            <Text
              fontSize={data?.artist_data?.name?.length > 14 ? '70px' : '95px'}
              fontWeight={700}
              textShadow='0 0px 12px rgba(0, 0, 0, 1)'
            >
              {data?.artist_data?.name}
            </Text>
          )}
          {data?.artist_data.popularity && (
            <PopularityBadge score={data?.artist_data?.popularity} />
          )}
        </Box>
      </Box>

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
      </Box>
    </>
  );
}

export default ArtistDetailScreen;
