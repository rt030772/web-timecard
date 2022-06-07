import { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select } from "@chakra-ui/react";
import { setMinutes } from "date-fns";
import { FC, memo, useState } from "react";

type Props = {
  breakMinute: number
  setBreakMinute: any

}


export const BreakMinuteInput: FC<Props> = memo((props) => {
  const { breakMinute, setBreakMinute } = props;

  const formatMinute = (minute: number) => minute < 10 ? '0' + minute : minute.toString();
  const parse = (val: string) => Number(val.replace(/^0/, ''))

  const onChangeMinute = (minute: string) => {
    setBreakMinute(parse(minute))
  }


  return (
    <NumberInput clampValueOnBlur={false} allowMouseWheel onChange={onChangeMinute}
      fontSize={"sm"} size={"sm"} step={5} value={ formatMinute(breakMinute) }  min={0} max={300}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  )
})