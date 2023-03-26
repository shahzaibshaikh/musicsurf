import {
  AspectRatio,
  Card,
  CardBody,
  Heading,
  HStack,
  Text,
  Image
} from '@chakra-ui/react';
import { PlaylistItems } from '../../store/slices/searchSlice';

interface PlaylistCardProps {
  data: PlaylistItems;
}

function PlaylistCard({ data }: PlaylistCardProps) {
  return (
    <Card
      background='#1b1b1b'
      _hover={{ background: '#262626', transition: '300ms' }}
      padding={4}
      boxShadow='0 8px 8px rgba(0, 0, 0, .1)'
      borderRadius={5}
    >
      <AspectRatio ratio={1}>
        <Image
          src={data?.images[0]?.url}
          borderRadius={5}
          boxShadow='0 8px 8px rgba(0, 0, 0, .4)'
        />
      </AspectRatio>
      <CardBody padding={0} marginTop={4}>
        <Heading
          size='1xl'
          marginBottom={1}
          noOfLines={1}
          overflowWrap='break-word'
          color='white'
        >
          {data?.name}
        </Heading>
        <Text
          fontSize='13px'
          color='gray.300'
          fontWeight={500}
          lineHeight={1.7}
          noOfLines={1}
          overflowWrap='break-word'
        >
          By {data?.owner?.display_name}
        </Text>
      </CardBody>
    </Card>
  );
}

export default PlaylistCard;
