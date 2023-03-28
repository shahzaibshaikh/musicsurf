import { HStack, SimpleGrid, VStack, Text, Image } from '@chakra-ui/react';
import { Albums } from '../../store/slices/specificAlbumSlice';
import convertMillisecondsToTime from '../../utilities/milisecondsToTime';
import capitalizeFirstLetter from '../../utilities/textUppercase';

interface AlbumDetailHeaderProps {
  data: Albums;
}

function AlbumDetailHeader({ data }: AlbumDetailHeaderProps) {
  const artistList: string[] | undefined = data?.artists.map(artist => artist.name);
  const totalDuration: number | undefined = data?.tracks?.items.reduce(
    (total, current) => total + current.duration_ms,
    0
  );

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}
      gridTemplateColumns={{ base: '1fr', lg: '250px auto' }}
      gap={4}
    >
      <Image
        boxSize={240}
        src={data?.images[0]?.url}
        boxShadow='0 2px 16px rgba(0, 0, 0, .6)'
      />
      <VStack justifyContent='flex-end' alignItems='flex-start'>
        <Text fontSize='13px' fontWeight={700} marginBottom={-2} color='white'>
          {data?.album_type && capitalizeFirstLetter(data?.album_type)}
        </Text>
        {data?.name && (
          <Text
            fontSize={{
              base: data?.name?.length > 20 ? '20px' : '40px',
              lg: data?.name?.length > 20 ? '50px' : '75px'
            }}
            fontWeight={700}
            color='white'
          >
            {data?.name}
          </Text>
        )}
        <HStack spacing={1}>
          <Text fontSize='13px' fontWeight={700} color='white'>
            {artistList && artistList?.join(' \u2022 ') + ' \u2022 '}
          </Text>
          <Text fontSize='13px' fontWeight={500} color='white'>
            {data?.release_date && data.release_date.split('-')[0] + ' \u2022 '}
          </Text>
          <Text fontSize='13px' fontWeight={500} color='white'>
            {data?.total_tracks && data?.total_tracks + ' songs' + ', '}
          </Text>
          <Text fontSize='13px' fontWeight={500} color='gray.300'>
            {totalDuration && convertMillisecondsToTime(totalDuration)}
          </Text>
        </HStack>
      </VStack>
    </SimpleGrid>
  );
}

export default AlbumDetailHeader;
