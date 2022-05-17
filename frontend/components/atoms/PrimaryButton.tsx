import { Button } from '@chakra-ui/react';
import { Props } from 'framer-motion/types/types';
import { memo, FC } from 'react'

export const PrimaryButton: FC<Props> = memo((props) => {
  return (
    <Button size={"md"} bg="teal.400" color="white" _hover={{opacity:0.8}}
      onClick={props.onClick} w="100%">
      {props.children}
    </Button>
  )
})