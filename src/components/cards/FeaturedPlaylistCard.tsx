import { Box, Image, HStack, Text, CardBody, Card, Heading } from '@chakra-ui/react';
import { PlaylistItems } from '../../store/slices/searchSlice';

interface FeaturedPlaylistCardProps {
  data: PlaylistItems;
}

function FeaturedPlaylistCard({ data }: FeaturedPlaylistCardProps) {
  return (
    <Card
      borderRadius={4}
      background='rgb(90,90,90, 0.2)'
      overflow='hidden'
      _hover={{ background: 'rgb(90,90,90, 0.4)', transition: '300ms' }}
      boxShadow='0 8px 8px rgba(0, 0, 0, .1)'
    >
      <HStack>
        <Image
          boxShadow='0 8px 14px rgba(0, 0, 0, .6)'
          boxSize='80px'
          src={data?.images[0]?.url}
        />
        <CardBody height='80px' alignItems='flex-start'>
          <Heading size='1xl' noOfLines={1} overflowWrap='break-word' color='white'>
            {data?.name}
          </Heading>
        </CardBody>
      </HStack>
    </Card>
  );
}

export default FeaturedPlaylistCard;
