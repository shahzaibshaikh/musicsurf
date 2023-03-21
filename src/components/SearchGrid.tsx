import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import randomColor from 'randomcolor';
import CategoryCard from './CategoryCard';

function SearchGrid(): JSX.Element {
  return (
    <Box className='search-grid-container'>
      <Heading fontSize='2xl' marginBottom={4}>
        Browse all
      </Heading>

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={6}>
        <CategoryCard cardColor={randomColor({ luminosity: 'dark' })} />
        <CategoryCard cardColor={randomColor({ luminosity: 'dark' })} />
        <CategoryCard cardColor={randomColor({ luminosity: 'dark' })} />
        <CategoryCard cardColor={randomColor({ luminosity: 'dark' })} />
        <CategoryCard cardColor={randomColor({ luminosity: 'dark' })} />
        <CategoryCard cardColor={randomColor({ luminosity: 'dark' })} />
        <CategoryCard cardColor={randomColor({ luminosity: 'dark' })} />
        <CategoryCard cardColor={randomColor({ luminosity: 'dark' })} />
        <CategoryCard cardColor={randomColor({ luminosity: 'dark' })} />
        <CategoryCard cardColor={randomColor({ luminosity: 'dark' })} />
        <CategoryCard cardColor={randomColor({ luminosity: 'dark' })} />
      </SimpleGrid>
    </Box>
  );
}

export default SearchGrid;
