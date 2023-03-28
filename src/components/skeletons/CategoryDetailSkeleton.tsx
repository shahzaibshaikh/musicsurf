import { Box, SimpleGrid, SkeletonText } from '@chakra-ui/react';
import PlaylistCardSkeleton from './PlaylistCardSkeleton';

function CategoryDetailSkeleton() {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <Box className='main-grid-container'>
      <SkeletonText fontSize='60px' marginBottom={24} width='400px' />

      <Box>
        <SkeletonText fontSize='20px' marginBottom={6} width='200px' />
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={6}>
          {skeletons.map(skeleton => (
            <PlaylistCardSkeleton key={skeleton} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default CategoryDetailSkeleton;
