import { Box, Heading } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { average } from 'color.js';
import PlaylistSearchDisplay from '../components/layout/PlaylistSearchDisplay';
import useSpecificCategory from '../hooks/useSpecificCategory';
import { SpecificCategoryState } from '../store/slices/specificCategorySlice';
import { useState } from 'react';
import CategoryDetailSkeleton from '../components/skeletons/CategoryDetailSkeleton';

function CategoryDetailScreen() {
  const { categoryID } = useParams();
  const token: string | null = localStorage.getItem('token') ?? '';
  const { loading, data }: SpecificCategoryState = useSpecificCategory(token, categoryID);
  let colorGenerator: string;
  const [color, setColor] = useState('');

  data?.category?.icons[0] &&
    average(data?.category?.icons[0]?.url, { amount: 1 }).then(color => {
      colorGenerator = `rgb(${color[0]},${color[1]},${color[2]}, 0.6)`;
      setColor(colorGenerator);
    });

  return (
    <>
      {loading ? (
        <CategoryDetailSkeleton />
      ) : (
        <Box
          className='main-grid-container'
          background={`linear-gradient(180deg, ${color} 0%, rgba(18, 18, 18, 1) 100%)`}
        >
          {data?.category?.name && (
            <Heading
              fontSize={{
                base: data?.category?.name?.length > 15 ? '40px' : '60px',
                lg: data?.category?.name?.length > 20 ? '60px' : '85px'
              }}
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
      )}
    </>
  );
}

export default CategoryDetailScreen;
