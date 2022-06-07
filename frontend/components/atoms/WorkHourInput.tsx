import { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select } from "@chakra-ui/react";
import { setHours } from "date-fns";
import { ChangeEvent, FC, memo } from "react";

type Props =  {
  defaultHour: number,
  setDateTime?: any,
  date?: Date
}


export const WorkHourInput: FC<Props> = memo((props) => {
  const { defaultHour, setDateTime, date } = props;
  const onChangeHour = (e: string) => {
    // setStartDateTime( startDate?.setHours(Number(e.target.value) ))
    setDateTime( (setHours(date!,Number(e))) )
  }
  return (
    <NumberInput size={"sm"} step={1} defaultValue={props.defaultHour} min={0} max={23} onChange={ onChangeHour }>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  )
})