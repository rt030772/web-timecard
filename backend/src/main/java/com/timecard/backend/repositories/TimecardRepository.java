package com.timecard.backend.repositories;

import com.timecard.backend.models.Department;
import com.timecard.backend.models.Timecard;
import com.timecard.backend.utils.TimecardPrimaryKey;
import org.springframework.data.repository.CrudRepository;

public interface TimecardRepository extends CrudRepository<Timecard, TimecardPrimaryKey> {

}
