import { EditIcon } from '@chakra-ui/icons';
import { Box, Button, ButtonGroup, FormControl, FormLabel, IconButton, Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverTrigger, Stack, Textarea, useDisclosure } from '@chakra-ui/react';
import { memo, FC, useRef, Dispatch, SetStateAction, useState, ChangeEvent } from 'react'

type Props = {
  hasRemarks: boolean,
  setHasRemarks: any,
}


export const RemarksPopup: FC<Props> = memo((props) => {
  const { hasRemarks, setHasRemarks } = props;
  const [ remarks, setRemarks] = useState<string>("");
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = useRef<any>(null)
  

  const onClickRemakrsSave = () => {
    setHasRemarks(true);
    onClose();
  }


  const Form = memo(({ firstFieldRef, onCancel }) => {
    const onChangeRemarks = (event: ChangeEvent<HTMLTextAreaElement>) => setRemarks(event.target.value); 
    return (
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>備考</FormLabel>
          <Textarea id='last-name' ref={firstFieldRef} value={remarks} onChange={onChangeRemarks} />
        </FormControl>
        <ButtonGroup display='flex' justifyContent='flex-end'>
          <Button variant='outline' onClick={onCancel}>
            Cancel
          </Button>
          <Button colorScheme='teal' onClick={onClickRemakrsSave}>
            Save
          </Button>
        </ButtonGroup>
      </Stack>
    )
  })
  
  
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
            <Form firstFieldRef={firstFieldRef} onCancel={onClose} />
        </PopoverContent>
      </Popover>
    </>
  )
})