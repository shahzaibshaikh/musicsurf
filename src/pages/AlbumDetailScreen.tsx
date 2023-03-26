import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import useSpecificAlbum from '../hooks/useSpecificAlbum';

function AlbumDetailScreen() {
  const { token } = useSelector((state: any) => state.spotify);
  const { loading, error, data } = useSpecificAlbum(token);
  return <Box className='album-grid-container'>Album Detail Screen</Box>;
}

export default AlbumDetailScreen;
