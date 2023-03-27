import { SimpleGrid, Image, VStack, Text, HStack } from '@chakra-ui/react';
import { PlaylistItems } from '../../store/slices/searchSlice';
import convertMillisecondsToTime from '../../utilities/milisecondsToTime';
import capitalizeFirstLetter from '../../utilities/textUppercase';

interface PlaylistDetailHeaderProps {
  data: PlaylistItems;
}

function PlaylistDetailHeader({ data }: PlaylistDetailHeaderProps) {
  const totalDuration: number | undefined = data?.tracks?.items.reduce(
    (total, current) => total + current.track.duration_ms,
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
          {data?.type && capitalizeFirstLetter(data?.type)}
        </Text>
        {data?.name && (
          <Text
            fontSize={data?.name?.length > 20 ? '50px' : '75px'}
            fontWeight={700}
            color='white'
          >
            {data?.name}
          </Text>
        )}
        {data.description && (
          <Text fontSize='13px' fontWeight={500} color='gray.300'>
            {data?.description}
          </Text>
        )}
        <HStack spacing={1}>
          <Text fontSize='13px' fontWeight={700} color='white'>
            {data?.owner && data?.owner?.display_name + ' \u2022 '}
          </Text>
          <Text fontSize='13px' fontWeight={500} color='white'>
            {data?.tracks?.total && data?.tracks?.total + ' songs \u2022 '}
          </Text>
          <Text fontSize='13px' fontWeight={500} color='gray.300'>
            {totalDuration && convertMillisecondsToTime(totalDuration)}
          </Text>
        </HStack>
      </VStack>
    </SimpleGrid>
  );
}

export default PlaylistDetailHeader;
