import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, MenuButton, Radio, RadioGroup, Stack, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useDisclosure, VStack } from '@chakra-ui/react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useState } from 'react';
import { Form, useFormik } from 'formik';
import { PrimaryButton } from '../../components/atoms/PrimaryButton';
import { DepartmentSelect } from '../../components/atoms/DepartmentSelect';
import { UserInfoDrawer } from '../../components/layouts/UserInfoDrawer';
import { UserInfo } from '../../interfaces';



function User() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialValues: UserInfo = {
    employeeCode: undefined,
    name: undefined,
    email: undefined,
    password: undefined,
    departmentCode: undefined,
    isAdmin: "false",
    isApprover: "false"
  }

   const formik = useFormik({
     initialValues: {
       ...initialValues,
     },
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });
  
  return (
    <>
      <Container mt={"10px"}  maxW={{ lg: 760, md:540, sm: 540}}>
        <Box alignItems="right" display='flex'>
          <UserInfoDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </Box>

        <TableContainer>
          <Table variant='simple' size={"md"} >
            <Thead>
              <Tr>
                <Th>社員番号</Th>
                <Th>名前</Th>
                <Th>承認権限</Th>
                <Th>管理者権限</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr _hover={{ cursor: "pointer"}} onClick={onOpen}>
                <Td>654321</Td>
                <Td>企業 一郎</Td>
                <Td>ON</Td>
                <Td>OFF</Td>
              </Tr>
              <Tr>
                <Td>123456</Td>
                <Td>会社 太郎</Td>
                <Td>OFF</Td>
                <Td>OFF</Td>
              </Tr>
              <Tr>
                <Td>323232</Td>
                <Td>組織 三郎</Td>
                <Td>OFF</Td>
                <Td>OFF</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
      
    </>
  )
}
export default User;