import { Select } from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useEffect, useState } from "react";
import { Department } from "../../interfaces";
import { fetchDepartments } from "../../services/api/admin";

type Props = {
  departmentId: number | undefined;
  onChange: any;
}





export const DepartmentSelect: FC<Props> = memo((props) => {
  const { departmentId, onChange } = props;
  const [ departments, setDepartments ] = useState<Department[]>([]);

  const handleFetchDepartments =  async () => {
    try {
      const res = await fetchDepartments();
      setDepartments(res.data)
    } catch (err) {
      alert("処理に失敗しました。");
      console.error(err)
    }
  }


  useEffect(() => {
    handleFetchDepartments(),
    []
  })

  return (
    <Select name="departmentId" borderRadius={"md"} size="md" w={"20em"} value={departmentId} onChange={onChange} >
    {departments?.map((department: Department) => {
        return (
          <option value={department.id}>{ department.departmentName }</option>
          )
      })
    }
    </Select>
  )
})