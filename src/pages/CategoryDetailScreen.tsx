import { Box, Heading } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import PlaylistSearchDisplay from '../components/layout/PlaylistSearchDisplay';
import useSpecificCategory from '../hooks/useSpecificCategory';
import { SpecificCategoryState } from '../store/slices/specificCategorySlice';

function CategoryDetailScreen() {
  const { categoryID } = useParams();
  const token: string | null = localStorage.getItem('token') ?? '';
  const { loading, data }: SpecificCategoryState = useSpecificCategory(token, categoryID);
  return (
    <Box className='main-grid-container'>
      {data?.category?.name && (
        <Heading
          fontSize={data?.category?.name?.length > 18 ? '50px' : '85px'}
          marginBottom={12}
          color='white'
        >
          {data?.category?.name}
        </Heading>
      )}

      {data?.playlists?.items && (
        <PlaylistSearchDisplay variant='category-playlist' data={data?.playlists} />
      )}
    </Box>
  );
}

export default CategoryDetailScreen;
