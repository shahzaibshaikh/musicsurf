import { Skeleton, Box, SkeletonText } from '@chakra-ui/react';
function CategoryCardSkeleton() {
  return (
    <Box
      borderRadius={8}
      height='210px'
      overflow='hidden'
      position='relative'
      boxShadow='0 8px 8px rgba(0, 0, 0, .2)'
    >
      <Skeleton width='100%' height='100%' />

      <SkeletonText />
    </Box>
  );
}

export default CategoryCardSkeleton;
