import { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props =  {
  defaultHour: number,
}


export const WorkHourInput: FC<Props> = memo((props) => {
  return (
    <NumberInput size={"sm"} step={1} defaultValue={props.defaultHour} min={0} max={23}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  )
})