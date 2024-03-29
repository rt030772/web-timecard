import { MinusIcon, SmallAddIcon, SmallCloseIcon, SpinnerIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, HStack, IconButton, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import Link from 'next/link';
import React, { memo, FC, useState, useCallback } from 'react'
import { useRouter } from 'next/router';
import { WorkClassSelect } from '../atoms/WorkClassSelect';
import { WorkTimeSelect } from '../atoms/WorkTimeSelect';
import { WorkMinuteInput } from '../atoms/WorkMinuteInput';
import { startOfMonth, endOfMonth, isAfter, addDays, format, isBefore, setHours, subHours, sub, getHours, subMinutes, getMinutes, formatDistance } from 'date-fns';
import { fsync } from 'fs';
import { ja } from 'date-fns/locale';
import { RemarksPopup } from './RemarksPopup';
import { BreakMinuteInput } from '../atoms/BreakMinuteInput';

type Props = {
  date: Date
  setDateList: any;
  dateList: Array<any>
  no: number
}

export const TimecardRow: FC<Props> = memo((props) => {
  const { date, setDateList, dateList, no } = props;

  const [ startDateTime, setStartDateTime ] = useState<Date>(setHours(date,9))
  const [ endDateTime, setEndDateTime ] = useState<Date>(setHours(date,18))
  const [ breakMinute, setBreakMinute ] = useState<number>(60)


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

  const calcWorkTotal = () => {
    
    const diffMinute = (endDateTime.getTime() - startDateTime.getTime()) / ( 1000 * 60 ) - breakMinute;
    const hour = Math.floor(diffMinute / 60);
    const minute = diffMinute % 60;
    return hour.toString() + ":" + (minute < 10 ? "0" + minute : minute.toString());

  };

  const calcExtensionTime = () => {
    const diffMinute = (endDateTime.getTime() - startDateTime.getTime()) / ( 1000 * 60 ) - breakMinute;
    if (diffMinute <= (8 * 60)) {
      return "0:00"
    } else {
      const extensionMinute = diffMinute - (8 * 60);
      const hour = Math.floor(extensionMinute / 60);
      const minute = extensionMinute % 60;
      return hour.toString() + ":" + (minute < 10 ? "0" + minute : minute.toString());
    }
  }

  const onClickAdd = () => {
    const index = dateList.map(map => map.date).lastIndexOf(date);
    setDateList([...dateList.slice(0, index+1), { date: date, no: no + 1 }, ...dateList.slice(index+1)] )
  }

  const onClickMinus = (no: number) => {
    setDateList( dateList.filter((date) => date.date != date && date.no != no ))
  }


  return (
    <Tr key={props.date.toString()} bg={calcRowColor()}>
      <Td fontSize={"xs"}>
        {no === 1 ?
          <IconButton mr={2} size="xs" aria-label='add-button' onClick={onClickAdd} 
            icon={<SmallAddIcon />} />
          :
          <IconButton mr={2} size="xs" aria-label='add-button' color={"red"} onClick={ () => onClickMinus(no)}
            icon={<MinusIcon />} />
        }
        { no === 1 ? format(date, 'yyyy/MM/dd (E)', { locale: ja }) : "" } 
        </Td>
      <Td><WorkClassSelect workClass={ calcWorkClass()} /></Td>
        <Td><WorkTimeSelect date={startDateTime} setDateTime={setStartDateTime} /></Td>
        <Td><WorkTimeSelect date={endDateTime} setDateTime={setEndDateTime} /></Td>
        <Td p={1} w={"4em"}><BreakMinuteInput breakMinute={ breakMinute } setBreakMinute={setBreakMinute} /></Td>
      <Td p={0} textAlign="center">{ calcWorkTotal() }</Td>
        <Td p={0} textAlign="center"> { calcExtensionTime() } </Td>
        <Td p={0} textAlign="center"><RemarksPopup/></Td>
        <Td p={0} textAlign="center"></Td>
        <Td p={0}><Button color="teal.600" size={"sm"}>申請</Button></Td>
      </Tr>
  );
})