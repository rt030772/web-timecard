package com.timecard.backend.models;

import javax.persistence.*;

@Entity
public class User {

  @Id
  private String employeeCode;
  private String name;
  private String email;
  private String password;
  private int departmentId;
  private String isAdmin;
  private String isAuthorizer;


  public String getEmployeeCode()         { return employeeCode; }
  public String getName()                 { return name; }
  public String getEmail()                { return email; }
  public String getPassword()             { return password;}
  public int getDepartmentId()       { return departmentId; }
  public String getIsAdmin() {
    return isAdmin;
  }
  public String getIsAuthorizer() {
    return isAuthorizer;
  }
  public void setEmployeeCode(String employeeCode) { this.employeeCode = employeeCode; }
  public void setName(String name) { this.name = name; }
  public void setEmail(String email) {
    this.email = email;
  }
  public void setPassword(String password) {
    this.password = password;
  }
  public void setDepartmentId(int departmentCode) {
    this.departmentId = departmentCode;
  }
  public void setIsAdmin(String isAdmin) { this.isAdmin = isAdmin; }
  public void setIsAuthorizer(String isAuthorizer) { this.isAuthorizer = isAuthorizer; }

  public Department getDepartment() { return this.department; }

  @ManyToOne(cascade = { CascadeType.PERSIST },fetch = FetchType.EAGER)
  @JoinColumn(name="departmentId", insertable = false, updatable = false)
  private Department department;

  public String toString(){
    return String.format("User[employeeCode=%s, name=%s, email=%s, departmentId=%d, isAdmin=%d, isAuthorizer=%s]",
            employeeCode, name, email, departmentId, isAdmin, isAuthorizer);
  }

}
