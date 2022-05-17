import { Select } from "@chakra-ui/react";
import { FC, memo } from "react";



export const WorkClassSelect: FC<any> = memo(() => {
  return (
    <Select fontSize={"xs"} borderRadius={"md"}  size="sm" >
      <option value='attendance'>出勤</option>
      <option value='absence'>欠勤</option>
      <option value='paid'>有給</option>
    </Select>
  )
})