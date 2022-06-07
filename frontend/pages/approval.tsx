import { Box, Button, Container, FormControl, FormLabel, Heading, IconButton, Input, ListItem, MenuButton, Select, UnorderedList, VStack } from '@chakra-ui/react'
import React from 'react';

function Approval() {
  return (
    <>
      <Container mt={3}>
        <FormControl>
          <FormLabel>申請者</FormLabel>
          <Select size={"sm"} w={200}>
            <option value="takahashi">高橋 一郎</option>
            <option value="takahashi">田中 太郎</option>
            <option value="takahashi">吉田 博士</option>
          </Select>
        </FormControl>
      </Container>
    </>
  )
}
export default Approval;