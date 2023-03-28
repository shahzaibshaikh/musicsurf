import { Box, Heading } from '@chakra-ui/react';
import { PlaylistTrack, TrackItems, Tracks } from '../../store/slices/searchSlice';
import TrackCard from '../cards/TrackCard';

interface TrackListingProps {
  data: any;
  count: number;
  variant?: string;
}

function TrackListing({ data, count, variant }: TrackListingProps) {
  return (
    <Box marginTop={variant === 'artist-listing' ? -12 : 20} marginBottom={6}>
      <Heading fontSize='2xl' marginBottom={6} color='white'>
        {variant === 'artist-listing' ? 'Popular Tracks' : 'Songs'}
      </Heading>

      {variant === 'playlist-listing'
        ? data.map((item: PlaylistTrack) => {
            count++;
            return <TrackCard key={item?.track?.id} data={item?.track} count={count} />;
          })
        : data.map((item: TrackItems) => {
            count++;
            return <TrackCard key={item?.id} data={item} count={count} />;
          })}
    </Box>
  );
}

export default TrackListing;
