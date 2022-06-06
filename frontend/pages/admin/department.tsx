import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, MenuButton, Stack, VStack } from '@chakra-ui/react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useState } from 'react';
import { useFormik } from 'formik';


function Department() {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const handleSignin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/timecard");
  }
  return (
    <>
      <Flex align="center" justify="center" height={"80vh"}>
        <Input  type="password"></Input>
      </Flex>
    </>
  )
}
export default Department;