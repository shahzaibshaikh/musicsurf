import {
  Card,
  CardBody,
  Heading,
  Image,
  Text,
  LinkOverlay,
  LinkBox
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { Albums } from '../../store/slices/albumSlice';
import formatList from '../../utilities/textFormatter';

interface HomeCardProps {
  data: Albums;
}

function HomeCard({ data }: HomeCardProps) {
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
        <Image
          src={data?.images[0].url}
          borderRadius={5}
          boxShadow='0 8px 8px rgba(0, 0, 0, .4)'
        />
        <CardBody padding={0} marginTop={4}>
          <LinkOverlay as={ReactLink} to={`/album/${data.id}`}>
            <Heading
              size='1xl'
              marginBottom={1}
              noOfLines={1}
              overflowWrap='break-word'
              color='white'
            >
              {data?.name}
            </Heading>
          </LinkOverlay>

          <Text
            fontSize='13px'
            color='gray.300'
            fontWeight={500}
            lineHeight={1.7}
            noOfLines={1}
            overflowWrap='break-word'
          >
            {formattedList}
          </Text>
        </CardBody>
      </Card>
    </LinkBox>
  );
}

export default HomeCard;
