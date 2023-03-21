import { Box, SimpleGrid } from '@chakra-ui/react';
import HomeCard from './HomeCard';

function HomeGrid(): JSX.Element {
  return (
    <Box background='linear-gradient(180deg, rgba(25,25,25,1) 0%, rgba(18,18,18,1) 100%);'>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={6} padding={10}>
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </SimpleGrid>
    </Box>
  );
}

export default HomeGrid;
