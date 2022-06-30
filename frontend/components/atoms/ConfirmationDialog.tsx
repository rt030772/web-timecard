import { Button, useDisclosure } from '@chakra-ui/react';
import { memo, FC, ReactNode, useRef } from 'react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'

type Props = {
  onOpen: any;
  onClose: any;
  isOpen: boolean;
  onClick: any;
  title: string;
  description: string;
}


export const ConfirmationDialog: FC<Props> = memo((props) => {
  const { onOpen, onClose, isOpen, onClick, title, description } = props;
  
  const cancelRef = useRef();

  return (
    
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              { title }
            </AlertDialogHeader>

            <AlertDialogBody>
              { description }
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                キャンセル
              </Button>
              <Button colorScheme='red' onClick={onClick} ml={3}>
                実行
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>


  )
})