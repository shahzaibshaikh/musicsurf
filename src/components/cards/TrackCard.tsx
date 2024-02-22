import { Box, Heading, HStack, Image, Text, useDisclosure } from "@chakra-ui/react";
import { TrackItems } from "../../store/slices/searchSlice";
import formatTime from "../../utilities/msToMinutes";
import formatList from "../../utilities/textFormatter";
import { useState } from "react";
import AudioTrackPlayer from "../common/AudioTrackPlayer";

interface TrackCardProps {
  data: TrackItems;
  count?: number;
}

function TrackCard({ data, count }: TrackCardProps) {
  const [playMusic, setPlayMusic] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const artistList: string[] | undefined = data?.artists.map(artist => artist.name);
  const formattedList = artistList ? formatList(artistList) : "";
  return (
    <Box
      padding='4px 8px'
      background='transparent'
      _hover={{ background: "rgb(38,38,38,0.6)", transition: "300ms" }}
      borderRadius={6}
      border='none'
      onClick={() => {
        setPlayMusic(true);
        onOpen();
      }}
    >
      <AudioTrackPlayer
        onClose={onClose}
        isOpen={isOpen}
        preview_url={data.preview_url}
        name={data.name}
      />

      <HStack justifyContent='space-between' alignItems='center' border='none'>
        <HStack gap={2}>
          {data?.album?.images ? (
            <Image src={data?.album?.images[0]?.url} boxSize={41} />
          ) : (
            <Text color='gray.300' fontWeight={500}>
              {count}
            </Text>
          )}
          <div>
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
              {formattedList}
            </Text>
          </div>
        </HStack>
        <Text fontSize='13px' color='gray.300' fontWeight={500} lineHeight={1.7}>
          {formatTime(data?.duration_ms)}
        </Text>
      </HStack>
    </Box>
  );
}

export default TrackCard;
