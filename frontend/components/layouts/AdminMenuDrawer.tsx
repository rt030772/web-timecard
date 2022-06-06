import { SpinnerIcon } from '@chakra-ui/icons';
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, HStack, RadioGroup, Stack, useDisclosure, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import React, { memo, FC } from 'react'
import { useRouter } from 'next/router';

export const AdminMenuDrawer: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const menuList = ["User Management","Section Management","Notification","Custom Calendar"];

  return (
    <>
      <Box display={"block"}>
        <Button colorScheme='blue' onClick={onOpen}>
          Open
        </Button>
        <Drawer autoFocus={false} placement={"left"} onClose={onClose} isOpen={isOpen} 
        returnFocusOnClose={false} onOverlayClick={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='0.5px'>管理メニュー</DrawerHeader>
            <DrawerBody>
              <VStack mt={2}>
                { menuList.map((menu) => {
                  return (
                    <Link href="#" style={{ textDecoration: 'none' }}>
                      <Flex w={"100%"} align="center" p="4" mx="4" borderRadius="lg"
                      role="group" cursor="pointer"
                      _hover={{bg: "teal.400",color: 'white',}}>
                        {menu}
                      </Flex> 
                    </Link>
                  )
                }) }
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
})