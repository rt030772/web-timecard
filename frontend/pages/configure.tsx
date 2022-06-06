import { SmallAddIcon } from '@chakra-ui/icons';
import { Box, Button, Checkbox, Container, Flex, FormControl, FormLabel, GridItem, Heading, IconButton, Input, MenuButton, Radio, RadioGroup, Select, SimpleGrid, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ChangeEvent, memo, useCallback } from 'react';
import { PrimaryButton } from '../components/atoms/PrimaryButton';
import { WorkHourInput } from '../components/atoms/WorkHourInput';
import { WorkHourSelect } from '../components/atoms/WorkHourSelect';
import { WorkMinuteInput } from '../components/atoms/WorkMinuteInput';
import { WorkMinuteSelect } from '../components/atoms/WorkMinuteSelect';
import { WorkTimeSelect } from '../components/atoms/WorkTimeSelect';
import { UserSelectModal } from '../components/layouts/UserSelectModal';
import { useMessage } from '../hooks/useMessage'

function Confgure() {

  const [value, setValue] = React.useState('1')
  const [divisionName, setDivisionName] = React.useState<string>("");
  const [attendanceValue, setAttendanceValue] = React.useState('1')
  const { showMessage } = useMessage();
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onChangeDivisionName = (e: ChangeEvent<HTMLInputElement>) => setDivisionName(e.target.value);

  const onClickEnroll = () => {
      showMessage({status: "success",title: "登録しました。"});
  };

  const onClickAddAuthoriser = useCallback(()=> {
    onOpen();
  },[onOpen])

  return (
    <>
      <Container mt={3} maxW={{ lg: 760, md:540, sm: 540}}>
        <Flex>
          <VStack w="full" alignItems="flex-start">
            <Heading size="sm" borderBottom={"solid"}>設定</Heading>
            <SimpleGrid columns={4} columnGap={2} rowGap={2} w="full">
              <GridItem colSpan={{ base: 4, md: 2 }}>
                <FormControl>
                  <FormLabel size="sm">所属名</FormLabel>
                  <Input size="sm" placeholder='システム開発部 第2課' onChange={onChangeDivisionName} value={divisionName} />
                </FormControl>
              </GridItem>
              <GridItem colSpan={{ base: 4, md: 2 }}>
                <FormControl>
                  <FormLabel size="sm">通勤手当</FormLabel>
                  <Select size="sm">
                    <option value="usa">1ヶ月定期</option>
                    <option value="usa">3ヶ月定期</option>
                    <option value="usa">6ヶ月定期</option>
                    <option value="uae">実費精算(当月申請有)</option>
                    <option value="uae">実費精算(当月申請無)</option>
                    <option value="de">管理対象外</option>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <FormControl>
                  <FormLabel size="sm">開始時間</FormLabel>
                  <WorkTimeSelect />
                </FormControl>
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <FormControl>
                  <FormLabel size="sm">終了時間</FormLabel>
                  <WorkTimeSelect />
                </FormControl>
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <FormControl>
                  <FormLabel size="sm">標準勤務時間</FormLabel>
                  <WorkHourInput defaultHour={8} />
                </FormControl>
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <FormControl>
                  <FormLabel size="sm">休憩時間</FormLabel>
                  <WorkMinuteInput defaultMinute={60} />
                </FormControl>
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <FormControl>
                  <FormLabel size="sm">勤務区分</FormLabel>
                  <RadioGroup size="sm" onChange={setValue} value={value}>
                    <Stack direction='row'>
                      <Radio value='1'>客先</Radio>
                      <Radio value='2'>自社</Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <FormControl>
                  <FormLabel size="sm">出勤区分</FormLabel>
                  <RadioGroup size="sm" onChange={setAttendanceValue} value={attendanceValue}>
                    <Stack direction='row'>
                      <Radio value='1'>出社</Radio>
                      <Radio value='2'>在宅</Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
              </GridItem>
              <GridItem colSpan={{ base: 4, md: 4 }}>
                <FormControl>
                  <FormLabel size="sm">
                    承認者選択
                    <IconButton color={"teal.500"} autoFocus={false} border={"none"} ml={1} size="xs" aria-label='add-authorizer' 
                      onClick={() => onClickAddAuthoriser()} icon={<SmallAddIcon />} />
                  </FormLabel>
                  <Flex ml={3}>
                    <Text>田中</Text>
                  </Flex>
                </FormControl>
              </GridItem>
            </SimpleGrid>
          </VStack>
        </Flex>
        <Box mt={5} w={"30%"}>
          <PrimaryButton onClick={onClickEnroll}>保存 </PrimaryButton>
        </Box>
      </Container>
      <UserSelectModal onClose={onClose} isOpen={isOpen} />
    </>
  )
}

export default Confgure;