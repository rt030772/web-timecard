import { Select } from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useState } from "react";

type Props = {
  workClass: string
}


export const WorkClassSelect: FC<Props> = memo((props) => {
  const { workClass } = props;
  
  const [ wClass, setWClass ] = useState<string>(workClass);

  const onChangeWorkClass = (e: ChangeEvent<HTMLSelectElement>) => setWClass(e.target.value);
  
  return (
    <Select fontSize={"xs"} borderRadius={"md"} size="sm" w={"12em"} value={ wClass } onChange={onChangeWorkClass} >
      <option value='office'>出社</option>
      <option value='remote'>在宅</option>
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