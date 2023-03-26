import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { Artist, ArtistItems } from '../../store/slices/searchSlice';
import ArtistCard from '../cards/ArtistCard';

interface ArtistSearchDisplayProps {
  data: Artist;
}

function ArtistSearchDisplay({ data }: ArtistSearchDisplayProps) {
  return (
    <Box marginBottom={6}>
      <Heading fontSize='2xl' marginBottom={4} color='white'>
        Artists
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={6}>
        {data?.items.map((item: ArtistItems) => (
          <ArtistCard key={item.id} data={item} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default ArtistSearchDisplay;
