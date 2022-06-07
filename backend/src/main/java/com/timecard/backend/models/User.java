package com.timecard.backend.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {

    @Id
//    @GeneratedValue(strategy=GenerationType.AUTO)
    private String    employeeCode;

    private String    name;
    private String    email;
    private String    password;
    private int       departmentCode;
    private boolean   isAdmin;
    private boolean   isApprover;


  public String getEmployeeCode() {
    return employeeCode;
  }

  public void setEmployeeCode(String employeeCode) {
    this.employeeCode = employeeCode;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public int getDepartmentCode() {
    return departmentCode;
  }

  public void setDepartmentCode(int departmentCode) {
    this.departmentCode = departmentCode;
  }

  public boolean isAdmin() {
    return isAdmin;
  }

  public void setIsAdmin(boolean admin) {
    isAdmin = admin;
  }

  public boolean isApprover() {
    return isApprover;
  }

  public void setIsApprover(boolean approver) {
    isApprover = approver;
  }
}
