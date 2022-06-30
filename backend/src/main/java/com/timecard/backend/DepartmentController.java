package com.timecard.backend;

import com.timecard.backend.models.Department;
import com.timecard.backend.models.User;
import com.timecard.backend.repositories.DepartmentRepository;
import com.timecard.backend.repositories.UserRepository;
import com.timecard.backend.services.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/department")
public class DepartmentController {

    private DepartmentRepository departmentRepository;
    private final DepartmentService departmentService;

    @Autowired
    public DepartmentController(DepartmentService departmentService, DepartmentRepository departmentRepository){
        this.departmentService = departmentService;
        this.departmentRepository = departmentRepository;
    }


    @PostMapping(path="")
    public @ResponseBody Department addNewDepartment (@RequestParam String departmentName,
                                          @RequestParam int parentDepartmentId, @RequestParam String abbreviation) {

        Department department = new Department();
        department.setDepartmentName(departmentName);
        department.setParentDepartmentId(parentDepartmentId);
        department.setAbbreviation(abbreviation);
        departmentRepository.save(department);
        return department;
    }

    @GetMapping(path="")
    public @ResponseBody Iterable<Department> getDepartmentList() {
      return departmentRepository.findAll();
    }



}


