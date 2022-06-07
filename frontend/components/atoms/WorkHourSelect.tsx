import { Select } from "@chakra-ui/react";
import { FC, memo } from "react";



export const WorkHourSelect: FC<any> = memo(() => {
  return (
    <Select p={0}  fontSize={"sm"} borderRadius={"md"}  size="sm" >
      <option value={""}>{""}</option>
      { Array.from(Array(24).keys()).map((hour) => {
        return <option value={hour}>{hour}</option>
      })}
    </Select>
  )
})