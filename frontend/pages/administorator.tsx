import { Box, Button, Container, FormControl, FormLabel, Heading, IconButton, Input, ListItem, MenuButton, Select, UnorderedList, VStack } from '@chakra-ui/react'
import React from 'react';
import { AdminMenuDrawer } from '../components/layouts/AdminMenuDrawer';

function Administrator() {
  return (
    <>
      <Container>
        <AdminMenuDrawer/>
        <UnorderedList>
          <ListItem>ユーザー登録(社員番号、名前、email、管理者権限、承認者権限)</ListItem>
          <ListItem>お知らせ</ListItem>
          <ListItem>カスタムカレンダー</ListItem>
        </UnorderedList>
      </Container>
    </>
  )
}
export default Administrator;