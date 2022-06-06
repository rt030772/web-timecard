import { SpinnerIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import React, { memo, FC } from 'react'
import { useRouter } from 'next/router';

export const Header: FC = memo(() => {

  const router  = useRouter();
  const onClickHome = () => {
    router.push("timecard");
  }

  return (
    <>
      <Flex as="nav" bg="teal" color="gray.50" align="center" justify="space-between" padding={{ base: 5, md: 3 }}>
        <Flex align="center" as="a" mr={8} onClick={onClickHome} >
          <Heading as="h1" >
            Web-Timecard
          </Heading>
        </Flex>
        <Flex align="center" display={{ base: "none", md: "flex" }}>
          <HStack spacing={5}>
            <Link href="/timecard">Top </Link>
            <Link href="/approval">承認 </Link>
            <Link href="/admin/user">管理者機能 </Link>
            <Link href="/configure">設定</Link>
            <Link href="/signin">ログアウト</Link>
          </HStack>
        </Flex>
      </Flex>
    </>
  );
})