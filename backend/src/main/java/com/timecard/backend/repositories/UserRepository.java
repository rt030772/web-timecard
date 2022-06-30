package com.timecard.backend.repositories;

import org.springframework.data.repository.CrudRepository;

import com.timecard.backend.models.User;

public interface UserRepository extends CrudRepository<User, Integer> {
    User findByEmployeeCode(String employeeCode);


    void deleteByEmployeeCode(String employeeCode);

    Iterable<User> findByIsAdmin(String isAdmin);
    Iterable<User> findByIsAuthorizer(String isAuthorizer);
}
