import { EditIcon } from '@chakra-ui/icons';
import { Box, Button, ButtonGroup, FormControl, FormLabel, IconButton, Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverTrigger, Stack, Textarea, useDisclosure } from '@chakra-ui/react';
import { memo, FC, useRef, Dispatch, SetStateAction, useState, ChangeEvent } from 'react'

type Props = {
}


export const RemarksPopup: FC<Props> = memo((props) => {
  const [hasRemarks, setHasRemarks] = useState<boolean>(false);
  const [ remarks, setRemarks] = useState<string>("");
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = useRef<any>(null)
  

  const onClickRemakrsSave = () => {
    setHasRemarks(true);
    onClose();
  }

  const onChangeRemarks = (event: ChangeEvent<HTMLTextAreaElement>) => setRemarks(event.target.value); 

  return (
    <>
      <Box display={"inline-block"} mr={3} >{ hasRemarks ? "有" : "" }</Box>
      <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose} initialFocusRef={firstFieldRef}
        placement='bottom' closeOnBlur={false}
      >
        <PopoverTrigger>
          <IconButton size='sm' aria-label='remarks-popup' icon={<EditIcon />} />
        </PopoverTrigger>
        <PopoverContent p={5}>
          <PopoverArrow />
          <PopoverCloseButton />
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>備考</FormLabel>
              <Textarea id='last-name' value={remarks} onChange={onChangeRemarks} />
            </FormControl>
            <ButtonGroup display='flex' justifyContent='flex-end'>
              <Button variant='outline' onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='teal' onClick={onClickRemakrsSave}>
                Save
              </Button>
            </ButtonGroup>
          </Stack>
        </PopoverContent>
      </Popover>
    </>
  )
})