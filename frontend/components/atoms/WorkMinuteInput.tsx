import { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select } from "@chakra-ui/react";
import { setMinutes } from "date-fns";
import { FC, memo, useState } from "react";

type Props = {
  defaultMinute: number
  maxMinute?: number
  date?: Date
  setDateTime?: any
}


export const WorkMinuteInput: FC<Props> = memo((props) => {
  const { defaultMinute, maxMinute, date, setDateTime } = props;

  const [ minute, setMinute ] = useState<number>(defaultMinute)
  const formatMinute = (minute: number) => minute < 10 ? '0' + minute : minute.toString();
  const parse = (val: string) => Number(val.replace(/^0/, ''))

  const onChangeMinute = (minute: string) => {
    setMinute(parse(minute));
    setDateTime(setMinutes(date!,parse(minute)))
  }


  return (
    <NumberInput clampValueOnBlur={false} allowMouseWheel onChange={onChangeMinute}
      fontSize={"sm"} size={"sm"} step={5} value={ formatMinute(minute) }  min={0} max={maxMinute ? maxMinute : 55}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  )
})