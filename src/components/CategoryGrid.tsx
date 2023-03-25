import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import useCategories from '../hooks/useCategories';
import { Categories, CategoryState } from '../store/slices/categorySlice';
import CategoryCard from './CategoryCard';

function CategoryGrid(): JSX.Element {
  const { token } = useSelector((state: any) => state.spotify);
  const { loading, error, data } = useCategories<CategoryState>(token);
  return (
    <Box className='search-grid-container'>
      <Heading fontSize='2xl' marginBottom={4}>
        Browse all
      </Heading>

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={6}>
        {data?.categories?.items.map((item: Categories) => (
          <CategoryCard data={item} />
        ))}
      </SimpleGrid>
      <hr className='line' />
    </Box>
  );
}

export default CategoryGrid;
