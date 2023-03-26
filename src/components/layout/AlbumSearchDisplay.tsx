import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { AlbumItems, Albums } from '../../store/slices/searchSlice';
import AlbumCard from '../cards/AlbumCard';

interface AlbumSearchDisplayProps {
  data: Albums;
}

function AlbumSearchDisplay({ data }: AlbumSearchDisplayProps) {
  return (
    <Box marginBottom={6}>
      <Heading fontSize='2xl' marginBottom={4}>
        Albums
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={6}>
        {data?.items.map((item: AlbumItems) => (
          <AlbumCard key={item.id} data={item} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default AlbumSearchDisplay;
