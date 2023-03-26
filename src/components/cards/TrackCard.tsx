import { Card, Heading, HStack, Image, Text } from '@chakra-ui/react';
import { TrackItems } from '../../store/slices/searchSlice';
import formatTime from '../../utilities/msToMinutes';
import formatList from '../../utilities/textFormatter';

interface TrackCardProps {
  data: TrackItems;
}

function TrackCard({ data }: TrackCardProps) {
  const artistList: string[] | undefined = data?.artists.map(artist => artist.name);
  const formattedList = artistList ? formatList(artistList) : '';
  return (
    <Card
      padding='4px 8px'
      background='transparent'
      _hover={{ background: '#262626', transition: '300ms' }}
      borderRadius={6}
    >
      <HStack justifyContent='space-between' alignItems='center'>
        <HStack gap={2}>
          <Image src={data?.album?.images[0]?.url} boxSize={41} />
          <div>
            <Heading size='1xl' marginBottom={1}>
              {data?.name}
            </Heading>
            <Text fontSize='13px' color='gray.300' fontWeight={500} lineHeight={1.7}>
              {formattedList}
            </Text>
          </div>
        </HStack>
        <Text fontSize='13px' color='gray.300' fontWeight={500} lineHeight={1.7}>
          {formatTime(data?.duration_ms)}
        </Text>
      </HStack>
    </Card>
  );
}

export default TrackCard;
