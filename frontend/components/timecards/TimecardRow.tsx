import { SmallAddIcon, SpinnerIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, HStack, IconButton, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import Link from 'next/link';
import React, { memo, FC, useState } from 'react'
import { useRouter } from 'next/router';
import { WorkClassSelect } from '../atoms/WorkClassSelect';
import { WorkTimeSelect } from '../atoms/WorkTimeSelect';
import { WorkMinuteInput } from '../atoms/WorkMinuteInput';
import { startOfMonth, endOfMonth, isAfter, addDays, format, isBefore, setHours } from 'date-fns';
import { fsync } from 'fs';
import { ja } from 'date-fns/locale';
import { RemarksPopup } from './RemarksPopup';

type Props = {
    date: Date
}

export const TimecardRow: FC<Props> = memo((props) => {
  const { date } = props;
  const [hasRemarks, setHasRemarks] = useState<boolean>(false);

  const [breakTime, setBreakTime] = useState<number>(60);

  const calcRowColor = () => {
    switch (date.getDay()) {
      case 0: return "red.100";
      case 6: return "blue.100";
      default: return "gray.50"
    }
  }

  const calcWorkClass = () => {
    switch (date.getDay()) {
      case 0:
      case 6:
        return "holiday";
      default: return "office"
    }
  }

  return (
    <Tr key={props.date.toString()} bg={calcRowColor()}>
        <Td fontSize={"xs"}>{format(date, 'yyyy/MM/dd (E)', { locale: ja })}
          <IconButton ml={1} size="xs" aria-label='add-button'
            icon={<SmallAddIcon />} />
        </Td>
      <Td><WorkClassSelect workClass={ calcWorkClass()} /></Td>
        <Td><WorkTimeSelect date={setHours(date,9)} /></Td>
        <Td><WorkTimeSelect date={setHours(date,18)} /></Td>
      <Td p={1} w={"4em"}><WorkMinuteInput defaultMinute={ breakTime } maxMinute={300} /></Td>
        <Td p={0} textAlign="center">8:00</Td>
        <Td p={0} textAlign="center">0:00</Td>
        <Td p={0} textAlign="center"><RemarksPopup hasRemarks={hasRemarks} setHasRemarks={setHasRemarks}/></Td>
        <Td p={0} textAlign="center"></Td>
        <Td p={0}><Button color="teal.600" size={"sm"}>申請</Button></Td>
      </Tr>
  );
})