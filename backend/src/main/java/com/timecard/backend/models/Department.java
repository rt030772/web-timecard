package com.timecard.backend.models;

import javax.persistence.*;
import java.util.List;

@Entity
public class Department {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int         id;
    private String      departmentName;
    private Integer     parentDepartmentId;
    private String      abbreviation;

    public int getId() {
        return id;
    }
    public void setId(int departmentId) {
        this.id = departmentId;
    }
    public String getDepartmentName() {
        return departmentName;
    }
    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }
    public Integer getParentDepartmentId() {
        return parentDepartmentId;
    }
    public void setParentDepartmentId(Integer parentDepartmentId) {
        this.parentDepartmentId = parentDepartmentId;
    }
    public String getAbbreviation() {
        return abbreviation;
    }
    public void setAbbreviation(String abbreviation) {
        this.abbreviation = abbreviation;
    }

    public String toString(){
     return String.format("Department[departmentId=%s, departmentName=%s, abbreviation=%s]",
             id, departmentName, abbreviation);
    }

    @OneToMany(mappedBy = "department")
    private List<User> users;


}
