import { Box, Heading } from '@chakra-ui/react';
import { TrackItems, Tracks } from '../../store/slices/searchSlice';
import TrackCard from '../cards/TrackCard';

interface TrackListingProps {
  data: TrackItems[];
  count: number;
  variant?: string;
}

function TrackListing({ data, count, variant }: TrackListingProps) {
  return (
    <Box marginTop={variant === 'artist-listing' ? -12 : 20} marginBottom={6}>
      <Heading fontSize='2xl' marginBottom={6} color='white'>
        {variant === 'artist-listing' ? 'Popular Tracks' : 'Songs'}
      </Heading>
      {data.map(item => {
        count++;
        return <TrackCard key={item.id} data={item} count={count} />;
      })}
    </Box>
  );
}

export default TrackListing;
