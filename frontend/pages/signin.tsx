import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, MenuButton, Stack, VStack } from '@chakra-ui/react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useState } from 'react';
import { PrimaryButton } from '../components/atoms/PrimaryButton';

function Signin() {
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
        <Box bg="white" w="md" p={4} borderRadius="md" shadow="md">
          <Stack spacing={3} align="center" justify="center">
            <FormControl>
              <FormLabel >メールアドレス</FormLabel>
              <Input borderRadius={"md"} placeholder='test@sample.com'
                value={email} onChange={onChangeEmail}></Input>
            </FormControl>
            <FormControl>
              <FormLabel >パスワード</FormLabel>
              <Input borderRadius={"md"} type="password" 
                value={password} onChange={onChangePassword}></Input>
            </FormControl>
            <Box></Box>
            <FormControl>
              <PrimaryButton onClick={handleSignin}>ログイン</PrimaryButton>
            </FormControl>
          </Stack>
        </Box>
      </Flex>
    </>
  )
}
export default Signin;