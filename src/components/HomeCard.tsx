import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';
import placeholderImage from '../assets/255-2554719_a-generic-square-placeholder-image-with-rounded-corners.png';

function HomeCard() {
  return (
    <Card
      background='#1b1b1b'
      _hover={{ background: '#262626', transition: '300ms' }}
      padding={4}
      boxShadow='0 10px 18px rgba(0, 0, 0, .2)'
      borderRadius={5}
    >
      <Image
        src={placeholderImage}
        borderRadius={5}
        boxShadow='0 10px 20px rgba(0, 0, 0, .75)'
      />
      <CardBody padding={0} marginTop={4}>
        <Heading size='1xl' marginBottom={1}>
          Title
        </Heading>
        <Text fontSize='13px' color='gray.300' fontWeight={500} lineHeight={1.7}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Text>
      </CardBody>
    </Card>
  );
}

export default HomeCard;
