export interface User {
  employeeCode?: string;
  name?: string;
  email?: string;
  password?: string;
  departmentId?: number;
  department?: Department;
  isAdmin: string;
  isAuthorizer: string;
}


export interface Department {
  id?: number;
  parentDepartmentId?: number;
  departmentName?: string;
  abbreviation?: string;
}