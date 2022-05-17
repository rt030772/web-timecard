import { SpinnerIcon } from '@chakra-ui/icons';
import {
  Box, Flex, Heading, HStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter,
  ModalBody, ModalCloseButton } from '@chakra-ui/react';
import Link from 'next/link';
import React, { memo, FC } from 'react'
import { useRouter } from 'next/router';

type Props = {
  isOpen :boolean,
  onClose : () => void,
}

export const UserSelectModal: FC<Props> = memo((props) => {

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} autoFocus={false} size={"md"}>
      <ModalOverlay>
        <ModalContent pb={6}>
          <HStack>
            <ModalHeader>
            </ModalHeader>
          </HStack>
          <ModalCloseButton />
          <ModalBody mx={4}>
            
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
})