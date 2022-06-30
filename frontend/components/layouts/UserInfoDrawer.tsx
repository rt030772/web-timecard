import { AddIcon, DeleteIcon, SmallAddIcon, SpinnerIcon } from '@chakra-ui/icons';
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
import { Field, Form, FormikProvider, useFormik } from 'formik';
import { User } from '../../interfaces';
import { DepartmentSelect } from '../atoms/DepartmentSelect';
import { deleteUser, postUser } from '../../services/api/admin';
import { useMessage } from '../../hooks/useMessage';
import { ConfirmationDialog } from '../atoms/ConfirmationDialog';

type Props = {
  isOpen: boolean,
  onOpen: any,
  onClose: any,
  user: User | undefined
}


export const UserInfoDrawer: FC<Props> = memo((props) => {

    const { isOpen, onOpen, onClose, user } = props;
    const firstField = React.useRef();
    const { showMessage } = useMessage();
    const { isOpen: isOpenDialog, onOpen: onOpenDialog, onClose: onCloseDialog } = useDisclosure();

    const initialValues: User = {
      employeeCode: user ? user.employeeCode : "",
      name: user ? user.name : "",
      email: user ? user.email : "",
      password: user ? user.password : "",
      departmentId: user ? user.departmentId : 0,
      isAdmin: user ? user.isAdmin : "false",
      isAuthorizer: user ? user.isAuthorizer : "false"
  }
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      ...initialValues,
    },
    onSubmit: async (values) => {
      const res = await postUser(values)
      if (res.status === 200) {
        const message = user ? "登録に成功しました。" : "更新に成功しました。"
        showMessage({status:"success",title:message})
      } else {
        showMessage({status:"error",title:"処理に失敗しました。"})
      }
    },
  });
  
  const handleDeleteUser =  async (employeeCode: string) => {
    try {
      const res = await deleteUser(employeeCode);
      onCloseDialog();
      if (res.status === 200) {
        showMessage({status:"success",title:"削除に成功しました。"})
      } else {
        showMessage({status:"error",title:"処理に失敗しました。"})
      }
    } catch (err) {
      alert("処理に失敗しました。");
      console.error(err)
    }
  }


  return (
    <>
      <Button leftIcon={<SmallAddIcon />} color="white" bg='teal.400' size={"sm"} onClick={onOpen} _hover={{ opacity: 0.8 }}>新規登録</Button>
      <Drawer isOpen={isOpen} placement='right' /* initialFocusRef={firstField} */ onClose={onClose} size={"sm"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            {user ?
              <>
                ユーザー編集
                <IconButton icon={<DeleteIcon />} aria-label="delete user" ml="3" variant="outline" justifyContent="center" bg={"white"} size={"sm"}
                 _hover={{ opacity: 0.8 }} onClick={onOpenDialog} />
                <ConfirmationDialog onOpen={onOpenDialog} onClose={onCloseDialog} isOpen={isOpenDialog} onClick={() => handleDeleteUser(formik.values.employeeCode!)}
                  title="ユーザー削除" description='ユーザーを削除してよろしいですか？' />
              </>
              :
              "ユーザー登録"
            }
          </DrawerHeader>

          <DrawerBody>
            <FormikProvider value={formik}>
                <Stack spacing='5px'>
                  <Form>
                  
                    <FormControl>
                      <FormLabel >社員番号</FormLabel>
                      <Input borderRadius={"md"} name="employeeCode" value={formik.values.employeeCode} onChange={formik.handleChange} />
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
                      <DepartmentSelect departmentId={formik.values.departmentId} onChange={formik.handleChange} />
                    </FormControl>
                    <FormControl>
                      <FormLabel size="sm">管理者権限</FormLabel>
                      <RadioGroup size="sm" onChange={formik.handleChange} value={formik.values.isAdmin}>
                        <Stack direction='row'>
                          <Field as={Radio} name="isAdmin" value="true">ON</Field>
                          <Field as={Radio} name="isAdmin" value="false">OFF</Field>
                        </Stack>
                      </RadioGroup>
                    </FormControl>
                    <FormControl>
                      <FormLabel size="sm">承認者権限</FormLabel>
                      <RadioGroup size="sm" value={formik.values.isAuthorizer} onChange={formik.handleChange}>
                        <Stack direction='row'>
                          <Field as={Radio} name="isAuthorizer" value="true">ON</Field>
                          <Field as={Radio} name="isAuthorizer" value="false">OFF</Field>
                        </Stack>
                      </RadioGroup>
                    </FormControl>
                    <Box></Box>
                  </Form>
                </Stack>
            </FormikProvider>
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