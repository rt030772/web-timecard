package com.timecard.backend.models;

import com.timecard.backend.utils.TimecardPrimaryKey;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Data
@IdClass(TimecardPrimaryKey.class)
public class Timecard  implements Serializable {

    @Id
    private LocalDate workDate;
    @Id
    private int no;
    @Id
    private String          employeeCode;
    private String          workClass;
    private LocalDateTime   startTime;
    private LocalDateTime   closeTime;
    private int             breakMin;
    private int             workTotalMin;
    private int             workExtraMin;
    private String          remarks;
    private String          status;

    public LocalDate getWorkDate() {
        return workDate;
    }

    public void setWorkDate(LocalDate date) {
        this.workDate = date;
    }

    public int getNo() {
        return no;
    }

    public void setNo(int order) {
        this.no = order;
    }

    public String getWorkClass() {
        return workClass;
    }

    public void setWorkClass(String workClass) {
        this.workClass = workClass;
    }

    public String getEmployeeCode() {
        return employeeCode;
    }

    public void setEmployeeCode(String employeeCode) {
        this.employeeCode = employeeCode;
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }

    public LocalDateTime getCloseTime() {
        return closeTime;
    }

    public void setCloseTime(LocalDateTime closeTime) {
        this.closeTime = closeTime;
    }

    public int getBreakMin() {
        return breakMin;
    }

    public void setBreakMin(int breakMin) {
        this.breakMin = breakMin;
    }

    public int getWorkTotalMin() {
        return workTotalMin;
    }

    public void setWorkTotalMin(int workTotalMin) {
        this.workTotalMin = workTotalMin;
    }

    public int getWorkExtraMin() {
        return workExtraMin;
    }

    public void setWorkExtraMin(int workExtraMin) {
        this.workExtraMin = workExtraMin;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }



    public String toString(){
     return String.format("Timecard[Date=%s, order=%d, workClass=%s, employeeCode=%s, " +
                     "startTime=%s, closeTime=%s, breakMin=%d, workTotalMin=%d, workExtraMin=%d]" +
                     "remarks=%s, status=%s",
             workDate, no, workClass, employeeCode, startTime, closeTime, breakMin, workTotalMin, workExtraMin, remarks, status);
    }

}
