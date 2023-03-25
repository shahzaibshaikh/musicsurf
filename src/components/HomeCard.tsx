import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';
import placeholderImage from '../assets/255-2554719_a-generic-square-placeholder-image-with-rounded-corners.png';
import { AlbumData, Albums } from '../store/slices/albumSlice';

interface HomeCardProps {
  data?: Albums;
}

function HomeCard({ data }: HomeCardProps) {
  return (
    <Card
      background='#1b1b1b'
      _hover={{ background: '#262626', transition: '300ms' }}
      padding={4}
      boxShadow='0 8px 8px rgba(0, 0, 0, .1)'
      borderRadius={5}
    >
      <Image
        src={data?.images[1].url}
        borderRadius={5}
        boxShadow='0 10px 12px rgba(0, 0, 0, .4)'
      />
      <CardBody padding={0} marginTop={4}>
        <Heading size='1xl' marginBottom={1}>
          {data?.name}
        </Heading>
        {data?.artists.map(artist => (
          <Text
            key={artist.id}
            fontSize='13px'
            color='gray.300'
            fontWeight={500}
            lineHeight={1.7}
          >
            {artist.name}
          </Text>
        ))}
      </CardBody>
    </Card>
  );
}

export default HomeCard;
