import { Select } from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useState } from "react";

type Props = {
  departmentCode: any;
  onChange: any;
}


export const DepartmentSelect: FC<Props> = memo((props) => {
  const { departmentCode, onChange } = props;
  
  return (
    <Select name="departmentCode" borderRadius={"md"} size="md" w={"20em"} value={ departmentCode } onChange={onChange} >
      <option value="1">西日本システム部 1課</option>
      <option value="2">西日本システム部 2課</option>
      <option value="3">西日本システム部 3課</option>
      <option value="4">西日本システム部 4課</option>
      <option value="5">ソリューション部</option>
    </Select>
  )
})