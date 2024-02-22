import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/react";
import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

interface Props {
  preview_url: string;
  isOpen: boolean;
  name: string;
  onClose: () => void;
}

const AudioTrackPlayer = ({ preview_url, isOpen, onClose, name }: Props) => {
  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <AudioPlayer
            autoPlay
            src={preview_url}
            onPlay={e => console.log("onPlay")}

            // other props here
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AudioTrackPlayer;
