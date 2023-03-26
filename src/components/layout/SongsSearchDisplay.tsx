import { Heading, SimpleGrid } from '@chakra-ui/react';
import { TrackItems, Tracks } from '../../store/slices/searchSlice';
import TrackCard from '../cards/TrackCard';

interface SongSearchDisplayProps {
  data: Tracks;
}

function SongsSearchDisplay({ data }: SongSearchDisplayProps) {
  return (
    <>
      <Heading fontSize='2xl' marginBottom={4}>
        Songs
      </Heading>
      <SimpleGrid columnGap={6} columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}>
        {data?.items.map((item: TrackItems) => (
          <TrackCard key={item.id} data={item} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default SongsSearchDisplay;
