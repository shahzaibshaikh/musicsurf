import { Box } from '@chakra-ui/react';
import InitialSearch from './InitialSearch';

function SearchGrid(): JSX.Element {
  return (
    <Box className='grid-container'>
      <InitialSearch />
    </Box>
  );
}

export default SearchGrid;
