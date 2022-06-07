import { AddIcon, SmallAddIcon, SpinnerIcon } from '@chakra-ui/icons';
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, FormControl, FormLabel, Heading, HStack, IconButton, Input, Radio, RadioGroup, Stack, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';
import Link from 'next/link';
import React, { memo, FC, useState } from 'react'
import { useRouter } from 'next/router';
import { WorkClassSelect } from '../atoms/WorkClassSelect';
import { WorkTimeSelect } from '../atoms/WorkTimeSelect';
import { WorkMinuteInput } from '../atoms/WorkMinuteInput';
import { startOfMonth, endOfMonth, isAfter, addDays, format, isBefore, setDate, eachDayOfInterval } from 'date-fns';
import { fsync } from 'fs';
import { ja } from 'date-fns/locale';
import { TimecardRow } from '../timecards/TimecardRow';
import { PrimaryButton } from '../atoms/PrimaryButton';
import { Form, useFormik } from 'formik';
import { UserInfo } from '../../interfaces';
import { DepartmentSelect } from '../atoms/DepartmentSelect';

export const UserInfoDrawer: FC = memo(() => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()

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
      <Button leftIcon={<SmallAddIcon />} color="white" bg='teal.400' onClick={onOpen} _hover={{ opacity: 0.8 }}>新規登録</Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        initialFocusRef={firstField}
        onClose={onClose}
        size={"sm"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            ユーザー新規作成
          </DrawerHeader>

          <DrawerBody>
            <form onSubmit={formik.handleSubmit}>
              <Stack spacing='3px'>
                <FormControl>
                <FormLabel >社員番号</FormLabel>
                <Input borderRadius={"md"} name="emplyeeCode" value={formik.values.employeeCode} onChange={formik.handleChange}></Input>
              </FormControl>
              <FormControl>
                <FormLabel >氏名</FormLabel>
                <Input borderRadius={"md"} name="name" value={formik.values.name} onChange={formik.handleChange}></Input>
              </FormControl>
              <FormControl>
                <FormLabel >メールアドレス</FormLabel>
                <Input borderRadius={"md"} name="email" value={formik.values.email} onChange={formik.handleChange}></Input>
              </FormControl>
              <FormControl>
                <FormLabel >パスワード</FormLabel>
                <Input borderRadius={"md"} name="password" type="password" value={formik.values.password} onChange={formik.handleChange}></Input>
              </FormControl>
              <FormControl>
                <FormLabel >所属部署</FormLabel>
                <DepartmentSelect departmentCode={formik.values.departmentCode} onChange={formik.handleChange} />
              </FormControl>
              <FormControl>
                  <FormLabel size="sm">管理者権限</FormLabel>
                  <RadioGroup size="sm">
                    <Stack direction='row'>
                      <Radio value="true" name="isAdmin">ON</Radio>
                      <Radio value="false" name="isAdmin">OFF</Radio>
                    </Stack>
                  </RadioGroup>
              </FormControl>
              <FormControl>
                  <FormLabel size="sm">承認者権限</FormLabel>
                  <RadioGroup size="sm">
                    <Stack direction='row'>
                      <Radio value="true" name="isApprover">ON</Radio>
                      <Radio value="false" name="isApprover">OFF</Radio>
                    </Stack>
                  </RadioGroup>
              </FormControl>
              <Box></Box>
              </Stack>
            </form>
              


          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onClose}>
              キャンセル
            </Button>
            <Box w={"120px"}>
              <PrimaryButton onClick={formik.handleSubmit}>登録</PrimaryButton>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      </>
  );
})