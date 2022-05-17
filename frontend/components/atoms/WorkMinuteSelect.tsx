import { Select } from "@chakra-ui/react";
import { FC, memo } from "react";



export const WorkMinuteSelect: FC<any> = memo(() => {
  return (
    <Select p={0} fontSize={"sm"} borderRadius={"md"}  size="sm" >
      { [0,5,10,15,20,25,30,35,40,45,50,55].map((minute) => {
        return <option value={minute}>{minute}</option>
      })}
    </Select>
  )
})