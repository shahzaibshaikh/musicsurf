import {
  AspectRatio,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { AlbumItems } from '../../store/slices/searchSlice';
import formatList from '../../utilities/textFormatter';

interface AlbumCardProps {
  data: AlbumItems;
}

function AlbumCard({ data }: AlbumCardProps) {
  const artistList: string[] | undefined = data?.artists.map(artist => artist.name);
  const formattedList = artistList ? formatList(artistList) : '';
  return (
    <LinkBox>
      <Card
        background='#1b1b1b'
        _hover={{ background: '#262626', transition: '300ms' }}
        padding={4}
        boxShadow='0 8px 8px rgba(0, 0, 0, .1)'
        borderRadius={5}
      >
        <AspectRatio ratio={1}>
          <Image
            src={data?.images[0].url}
            borderRadius={5}
            boxShadow='0 8px 8px rgba(0, 0, 0, .4)'
          />
        </AspectRatio>
        <CardBody padding={0} marginTop={4}>
          <LinkOverlay as={ReactLink} to={`/album/${data.id}`}>
            <Heading size='1xl' marginBottom={1} noOfLines={1} overflowWrap='break-word'>
              {data?.name}
            </Heading>
          </LinkOverlay>
          <HStack>
            <Text
              fontSize='13px'
              color='gray.300'
              fontWeight={500}
              lineHeight={1.7}
              noOfLines={2}
              overflowWrap='break-word'
            >
              {data?.release_date.split('-')[0]} &#8226; {formattedList}
            </Text>
          </HStack>
        </CardBody>
      </Card>
    </LinkBox>
  );
}

export default AlbumCard;
