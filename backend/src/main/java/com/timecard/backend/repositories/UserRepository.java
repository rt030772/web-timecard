package com.timecard.backend.repositories;

import org.springframework.data.repository.CrudRepository;

import com.timecard.backend.models.User;

public interface UserRepository extends CrudRepository<User, Integer> {

}
