import {
  AspectRatio,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text
} from '@chakra-ui/react';
import { ArtistItems } from '../../store/slices/searchSlice';
import capitalizeFirstLetter from '../../utilities/textUppercase';

interface ArtistCardProps {
  data: ArtistItems;
}

function ArtistCard({ data }: ArtistCardProps) {
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
          borderRadius='50%'
          boxShadow='0 6px 16px rgba(0, 0, 0, .4)'
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
        <HStack>
          <Text fontSize='13px' color='gray.300' fontWeight={500} lineHeight={1.7}>
            {capitalizeFirstLetter(data?.type)}
          </Text>
        </HStack>
      </CardBody>
    </Card>
  );
}

export default ArtistCard;
