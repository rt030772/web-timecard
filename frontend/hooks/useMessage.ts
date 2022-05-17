import { useToast } from '@chakra-ui/react';
import { useCallback } from 'react'

type Props = {
  title: string,
  status: "success" | "info" | "warning" | "error"
}

export const useMessage = () => {
  const toast = useToast();

  const showMessage = useCallback((props: Props) => {
    const { title, status} = props;
    toast({
      status,
      title,
      isClosable: true,
      duration: 1000,
      position: "top"
    })

  },[toast]);

  return { showMessage }
}