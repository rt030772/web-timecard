import { SmallAddIcon, SpinnerIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, HStack, IconButton, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import Link from 'next/link';
import React, { memo, FC } from 'react'
import { useRouter } from 'next/router';
import { WorkClassSelect } from '../atoms/WorkClassSelect';
import { WorkTimeSelect } from '../atoms/WorkTimeSelect';
import { WorkMinuteInput } from '../atoms/WorkMinuteInput';
import { startOfMonth, endOfMonth, isAfter, addDays, format, isBefore } from 'date-fns';
import { fsync } from 'fs';
import { ja } from 'date-fns/locale';

type Props = {
    date: any
}

export const TimecardRow: FC<Props> = memo((props) => {

  return (
      <Tr key={props.date.toString()}>
        <Td fontSize={"xs"}>{format(props.date, 'yyyy/MM/dd (E)', { locale: ja })}
          <IconButton ml={1} size="xs" aria-label='add-button'
            icon={<SmallAddIcon />} />
        </Td>
        <Td p={1}><WorkClassSelect /></Td>
      <Td p={1}><WorkTimeSelect defaultTime={9} /></Td>
      <Td p={1}><WorkTimeSelect defaultTime={18} /></Td>
        <Td p={1} w={"4em"}><WorkMinuteInput defaultMinute={"00"} /></Td>
        <Td p={0} textAlign="center">8:00</Td>
        <Td p={0} textAlign="center">0:00</Td>
        <Td p={0} textAlign="center">入力</Td>
        <Td p={0} textAlign="center">未</Td>
        <Td p={0}><Button color="teal.600" size={"sm"}>申請</Button></Td>
      </Tr>
  );
})