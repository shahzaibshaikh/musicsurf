import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import useCategories from '../hooks/useCategories';
import { Categories, CategoryState } from '../store/slices/categorySlice';
import CategoryCard from '../components/cards/CategoryCard';
import CategoryCardSkeleton from '../components/skeletons/CategoryCardSkeleton';

function CategoryGrid(): JSX.Element {
  const { token } = useSelector((state: any) => state.spotify);
  const { loading, data } = useCategories<CategoryState>(token);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Box className='grid-container'>
      <Heading fontSize='2xl' marginBottom={4}>
        Browse all
      </Heading>
      {loading ? (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={6}>
          {skeletons.map(skeleton => (
            <CategoryCardSkeleton key={skeleton} />
          ))}
        </SimpleGrid>
      ) : (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={6}>
          {data?.categories?.items.map((item: Categories) => (
            <CategoryCard key={item.name} data={item} />
          ))}
        </SimpleGrid>
      )}
      <hr className='line' />
    </Box>
  );
}

export default CategoryGrid;
