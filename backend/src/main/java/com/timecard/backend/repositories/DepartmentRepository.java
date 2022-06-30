package com.timecard.backend.repositories;

import com.timecard.backend.models.Department;
import com.timecard.backend.models.User;
import org.springframework.data.repository.CrudRepository;

public interface DepartmentRepository extends CrudRepository<Department , Integer> {

}
