import { Box, Center, Flex, Select } from "@chakra-ui/react";
import { getHours, getMinutes } from "date-fns";
import { FC, memo } from "react";
import { WorkHourInput } from "./WorkHourInput";
import { WorkMinuteInput } from "./WorkMinuteInput";

type Props = {
  date?: Date,
  setDateTime?: any
}

export const WorkTimeSelect: FC<Props> = memo((props) => {
  const { date, setDateTime } = props;
  return (
    <>
      <Flex w={"10em"}>
        <WorkHourInput defaultHour={  date ? getHours(date) : 8 } setDateTime={setDateTime} date={date} />
        <Center mx={1} >:</Center>
        <WorkMinuteInput defaultMinute={ date ? getMinutes(date) : 60 } setDateTime={setDateTime} date={date} />
      </Flex>
    </>
  )
})