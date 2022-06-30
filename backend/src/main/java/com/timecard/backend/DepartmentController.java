package com.timecard.backend;

import com.timecard.backend.models.Department;
import com.timecard.backend.repositories.DepartmentRepository;
import com.timecard.backend.services.DepartmentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/departments")
public class DepartmentController {

    private static final Logger log = LoggerFactory.getLogger(DepartmentController.class);

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
        log.info("ENROLL Department " + department);
        return department;
    }

    @GetMapping(path="")
    public @ResponseBody Iterable<Department> getDepartmentList() {
        log.info("FETCH DepartmentList");
        return departmentRepository.findAll();
    }


    @DeleteMapping(path= "/{departmentCode}")
    public @ResponseBody String deleteDepartment(@PathVariable Integer departmentCode){
        Optional<Department> department = departmentRepository.findById(departmentCode);
        if(department.isPresent()){
            departmentRepository.delete(department.get());
            log.info("DELETE Department " + department.get());
            return "success";
        }else{
            return "designated department is not exist";
        }

    }


}


