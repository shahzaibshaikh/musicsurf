import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import useSearch from '../hooks/useSearch';
import { SearchState } from '../store/slices/searchSlice';
import InitialSearch from './InitialSearch';

function SearchGrid(): JSX.Element {
  const { token } = useSelector((state: any) => state.spotify);
  const limit = 5;
  const { loading, error, data } = useSearch<SearchState>(token, limit, 'aslam');
  return (
    <Box className='grid-container'>
      <InitialSearch />
    </Box>
  );
}

export default SearchGrid;
