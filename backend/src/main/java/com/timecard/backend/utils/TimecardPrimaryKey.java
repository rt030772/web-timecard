package com.timecard.backend.utils;

import lombok.Data;

import java.io.Serializable;
import java.time.LocalDate;

@Data
public class TimecardPrimaryKey implements Serializable {
    private LocalDate workDate;
    private int no;
    private String employeeCode;
}
