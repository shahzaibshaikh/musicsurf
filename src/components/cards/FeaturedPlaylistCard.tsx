import { Image, HStack, Card, Heading, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { PlaylistItems } from '../../store/slices/searchSlice';

interface FeaturedPlaylistCardProps {
  data: PlaylistItems;
}

function FeaturedPlaylistCard({ data }: FeaturedPlaylistCardProps) {
  return (
    <LinkBox>
      <Card
        borderRadius={4}
        background='rgb(90,90,90, 0.2)'
        overflow='hidden'
        _hover={{ background: 'rgb(90,90,90, 0.4)', transition: '300ms' }}
        boxShadow='0 8px 8px rgba(0, 0, 0, .1)'
      >
        <HStack alignItems='center'>
          <Image
            boxShadow='0 8px 14px rgba(0, 0, 0, .6)'
            boxSize='80px'
            src={data?.images[0]?.url}
          />
          <LinkOverlay as={ReactLink} to={`/playlist/${data?.id}`}>
            <Heading
              size='1xl'
              padding={3}
              noOfLines={1}
              overflowWrap='break-word'
              color='white'
            >
              {data?.name}
            </Heading>
          </LinkOverlay>
        </HStack>
      </Card>
    </LinkBox>
  );
}

export default FeaturedPlaylistCard;
