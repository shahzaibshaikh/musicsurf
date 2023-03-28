import { Box, HStack, Skeleton, SkeletonText } from '@chakra-ui/react';
import TrackCardSkeleton from './TrackCardSkeleton';

function AlbumDetailSkeleton() {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <Box className='album-grid-container'>
      <HStack marginBottom={14}>
        <Skeleton width='250px' height='250px' />
        <SkeletonText fontSize='60px' marginBottom={12} width='400px' />
      </HStack>
      <Box>
        <SkeletonText fontSize='20px' marginBottom={6} width='200px' />
        <Box marginTop={16} marginBottom={6}>
          {skeletons.map(skeleton => (
            <TrackCardSkeleton key={skeleton} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default AlbumDetailSkeleton;
