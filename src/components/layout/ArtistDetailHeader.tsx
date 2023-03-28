import { Box, Image, Text } from '@chakra-ui/react';
import { ArtistItems } from '../../store/slices/searchSlice';
import PopularityBadge from '../common/PopularityBadge';

interface ArtistDetailHeaderProps {
  data: ArtistItems;
}

function ArtistDetailHeader({ data }: ArtistDetailHeaderProps) {
  return (
    <Box position='relative' height='350px'>
      <Image src={data?.images[0]?.url} height='100%' w='100%' objectFit='cover' />
      <Box position='absolute' top='20%' left='0' className='grid-container'>
        {data?.name && (
          <Text
            fontSize={{
              base: data?.name?.length > 20 ? '20px' : '40px',
              lg: data?.name?.length > 20 ? '60px' : '85px'
            }}
            fontWeight={700}
            textShadow='0 0px 12px rgba(0, 0, 0, 0.5)'
            color='white'
          >
            {data?.name}
          </Text>
        )}
        {data?.popularity && <PopularityBadge score={data?.popularity} />}
      </Box>
    </Box>
  );
}

export default ArtistDetailHeader;
