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
import { TimecardRow } from '../timecards/TimecardRow';

export const TimecardTable: FC = memo(() => {

  const dateList = () => {
    const today = new Date();
    const startDay = startOfMonth(today);
    const endDay = endOfMonth(today); //subMonthsで月に対して加減ができる
    let dateList = [];
    for(let day = startDay;isBefore(day,endDay);day = addDays(day,1)){
      dateList.push(day);
    }
    return dateList;
  }

  return (
      <TableContainer>
        <Table variant={"simple"} size="sm" >
          <Thead>
            <Tr>
              <Th>日付</Th><Th>勤務区分</Th><Th>開始時間</Th><Th>終了時間</Th><Th>休憩時間</Th>
              <Th>勤務時間</Th><Th>超過時間</Th><Th>備考</Th><Th>状況</Th><Th>操作</Th>
            </Tr>
          </Thead>
          <Tbody>
            {dateList().map((date,index) =>
              <TimecardRow key={index} date={date} />
            )}
          </Tbody>
        </Table>
      </TableContainer>
  );
})