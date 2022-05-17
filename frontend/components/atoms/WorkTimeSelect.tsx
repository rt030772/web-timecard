import { Select } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  defaultTime: string,
}

export const WorkTimeSelect: FC<Props> = memo((props) => {
  return (
    <Select p={0} defaultValue={props.defaultTime} fontSize={"xs"} borderRadius={"md"}  size="sm" >
      <option value=''></option>
      <option value='09:00'>09:00</option>
      <option value='10:00'>10:00</option>
      <option value='11:00'>11:00</option>
      <option value='12:00'>12:00</option>
      <option value='17:00'>17:00</option>
      <option value='18:00'>18:00</option>
    </Select>
  )
})