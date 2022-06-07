import { SmallAddIcon, SpinnerIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, HStack, IconButton, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
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

export const TimecardTable: FC = memo(() => {

  type DateObj = {
    date: Date
    no: number
  } 

  function initDateList(): Array<DateObj> {
    let dateObjList: Array<DateObj> = [];
    for (const date of eachDayOfInterval({ start: new Date(2022, 4, 1), end: new Date(2022, 4, 31) })) {
      dateObjList.push({date:date,no:1})
    }
    return dateObjList;
  }

  const [dateObjList, setDateList] = useState<Array<DateObj>>(initDateList);


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
            {dateObjList.map((dateObj,index) =>
              <TimecardRow key={index} date={dateObj.date} setDateList={setDateList} dateList={dateObjList} no={dateObj.no} />
            )}
          </Tbody>
        </Table>
      </TableContainer>
  );
})