import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { ArtistItems } from '../../store/slices/searchSlice';
import ArtistCard from '../cards/ArtistCard';

interface ArtistSearchDisplayProps {
  data: ArtistItems[];
  variant?: string;
}

function ArtistSearchDisplay({ data, variant }: ArtistSearchDisplayProps) {
  return (
    <Box marginBottom={12}>
      <Heading fontSize='2xl' marginBottom={4} color='white'>
        {variant === 'artist-listing' ? 'Fans also like' : 'Artists'}
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={6}>
        {data?.map((item: ArtistItems) => (
          <ArtistCard key={item.id} data={item} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default ArtistSearchDisplay;
