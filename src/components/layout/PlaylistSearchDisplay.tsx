import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { Playlist, PlaylistItems } from '../../store/slices/searchSlice';
import PlaylistCard from '../cards/PlaylistCard';

interface PlaylistSearchDisplayProps {
  data: Playlist;
  variant?: 'category-playlist' | null;
}

function PlaylistSearchDisplay({ data, variant }: PlaylistSearchDisplayProps) {
  return (
    <Box>
      <Heading fontSize='2xl' marginBottom={4} color='white'>
        {variant === 'category-playlist' ? 'Featured Playlists' : 'Playlists'}
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={6}>
        {data?.items.map((item: PlaylistItems) => (
          <PlaylistCard key={item.id} data={item} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default PlaylistSearchDisplay;
