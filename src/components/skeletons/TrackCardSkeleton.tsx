import { Box, Card, HStack, SkeletonText } from '@chakra-ui/react';

function TrackCardSkeleton() {
  return (
    <Card padding='4px 8px' borderRadius={6} marginBottom={2}>
      <SkeletonText />
    </Card>
  );
}

export default TrackCardSkeleton;
