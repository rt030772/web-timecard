import { Button } from '@chakra-ui/react';
import { memo, FC, ReactNode } from 'react'

type Props = {
  onClick: any;
  children: ReactNode;
}


export const PrimaryButton: FC<Props> = memo((props) => {
  return (
    <Button size={"md"} bg="teal.400" color="white" _hover={{opacity:0.8}}
      onClick={props.onClick} w="100%">
      {props.children}
    </Button>
  )
})