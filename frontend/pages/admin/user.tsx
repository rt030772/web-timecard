import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, MenuButton, Radio, RadioGroup, Stack, useDisclosure, VStack } from '@chakra-ui/react'
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
      <UserInfoDrawer/>
      
    </>
  )
}
export default User;