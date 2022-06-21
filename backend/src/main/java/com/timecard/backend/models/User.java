package com.timecard.backend.models;

import javax.persistence.*;

@Entity
public class User {

    @Id
//    @GeneratedValue(strategy=GenerationType.AUTO)
    private String    employeeCode;

    private String    name;
    private String    email;
    private String    password;
    private int       departmentCode;
    private String isAdmin;
    private String isAuthorizer;


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

  public String getIsAdmin() {
    return isAdmin;
  }

  public void setIsAdmin(String isAdmin) { this.isAdmin = isAdmin; }

  public String getIsAuthorizer() {
    return isAuthorizer;
  }

  public void setIsAuthorizer(String isAuthorizer) { this.isAuthorizer = isAuthorizer; }

}
