package com.exam.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.exam.entity.Role;
@Repository
public interface roleRepo extends CrudRepository<Role,Long> {

	
}
