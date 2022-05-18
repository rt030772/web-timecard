import { Select } from "@chakra-ui/react";
import { FC, memo } from "react";



export const WorkClassSelect: FC<any> = memo(() => {
  return (
    <Select fontSize={"xs"} borderRadius={"md"}  size="sm" w={"12em"} >
      <option value='office'>出社</option>
      <option value='office'>在宅</option>
      <option value='holiday'>休日</option>
      <option value='paid'>有給</option>
      <option value='am-paid'>午前有給</option>
      <option value='pm-paid'>午後有給</option>
      <option value='transfer-holiday'>振替休日</option>
      <option value='absence'>欠勤</option>
      <option value='refresh'>リフレッシュ休暇</option>
      <option value='condolence'>慶弔休暇</option>
      <option value='other'>その他</option>
    </Select>
  )
})