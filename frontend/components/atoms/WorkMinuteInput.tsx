import { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select } from "@chakra-ui/react";
import { FC, memo } from "react";



export const WorkMinuteInput: FC<any> = memo(() => {
  return (
    <NumberInput fontSize={"sm"} size={"sm"} step={5} defaultValue={60} min={0} max={300}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  )
})