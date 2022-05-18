import { Box, Center, Flex, Select } from "@chakra-ui/react";
import { getHours } from "date-fns";
import { FC, memo } from "react";
import { WorkHourInput } from "./WorkHourInput";
import { WorkMinuteInput } from "./WorkMinuteInput";

type Props = {
  defaultTime: Date,
}

export const WorkTimeSelect: FC<Props> = memo((props) => {
  return (
    <>
      <Flex w={"10em"}>
        <WorkHourInput defaultHour={getHours(props.defaultTime)} />
        <Center mx={1} >:</Center>
        <WorkMinuteInput defaultMinute={"0"} />
      </Flex>
    </>
  )
})