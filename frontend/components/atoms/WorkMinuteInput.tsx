import { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  defaultMinute: string
}


export const WorkMinuteInput: FC<Props> = memo((props) => {
  return (
    <NumberInput fontSize={"sm"} size={"sm"} step={5} defaultValue={props.defaultMinute} min={0} max={300}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  )
})