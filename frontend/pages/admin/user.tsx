import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, MenuButton, Radio, RadioGroup, Stack, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useDisclosure, VStack } from '@chakra-ui/react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Form, useFormik } from 'formik';
import { PrimaryButton } from '../../components/atoms/PrimaryButton';
import { DepartmentSelect } from '../../components/atoms/DepartmentSelect';
import { UserInfoDrawer } from '../../components/layouts/UserInfoDrawer';
import { User } from '../../interfaces';
import { fetchUsers } from '../../services/api/admin';


function User() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [users, setUsers] = useState<User[]>([]);
  const [ targetUser, setTargetUser ] = useState<User | undefined>()

  const handleFetchUsers =  async () => {
    try {
      const res = await fetchUsers();
      setUsers(res.data)
    } catch (err) {
      alert("処理に失敗しました。");
      console.error(err)
    }
  }


  useEffect(() => {
    handleFetchUsers(),
    []
  })

  
  const setDrawer = (user: User | null) => {
    setTargetUser(user ? user : undefined)
    onOpen()
  }
  
  
  return (
    <>
      <Container mt={"10px"}  maxW={{ lg: 760, md:540, sm: 540}}>
        <Box alignItems="right" display='flex'>
          <UserInfoDrawer user={targetUser} isOpen={isOpen} onOpen={()=>setDrawer(null)} onClose={onClose} />
        </Box>

        <TableContainer>
          <Table variant='simple' size={"md"} >
            <Thead>
              <Tr>
                <Th>社員番号</Th>
                <Th>名前</Th>
                <Th>所属部署</Th>
                <Th>承認権限</Th>
                <Th>管理者権限</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                users?.map((user: User, index: number) => {
                  return (
                    <Tr key={index} _hover={{ cursor: "pointer" }} onClick={() => setDrawer(user)}>
                      <Td>{user.employeeCode}</Td>
                      <Td>{user.name}</Td>
                      <Td>{user.departmentCode}</Td>
                      <Td>{user.isAuthorizer === 'true' ? '○' : '×' }</Td>
                      <Td>{user.isAdmin === 'true' ? '○' : '×' }</Td>
                    </Tr>
                  )
                })
              }
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
      
    </>
  )
}
export default User;