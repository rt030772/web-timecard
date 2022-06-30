export interface User {
  employeeCode?: string;
  name?: string;
  email?: string;
  password?: string;
  departmentCode?: number;
  isAdmin: string;
  isAuthorizer: string;
}


export interface Department {
  departmentId?: number;
  parentDepartmentId?: number;
  name?: string;
  abbreviation?: string;
}