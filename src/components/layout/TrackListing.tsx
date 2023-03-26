import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { Tracks } from '../../store/slices/searchSlice';
import TrackCard from '../cards/TrackCard';

interface TrackListingProps {
  data: Tracks;
  count: number;
}

function TrackListing({ data, count }: TrackListingProps) {
  return (
    <Box marginTop={20}>
      <Heading fontSize='2xl' marginBottom={6} color='white'>
        Songs
      </Heading>
      {data?.items.map(item => {
        count++;
        return <TrackCard key={item.id} data={item} count={count} />;
      })}
    </Box>
  );
}

export default TrackListing;
