package com.exam.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.exam.entity.User;

@Repository
public interface userRepo extends CrudRepository<User,Long>{

	@Query("select u from User u where u.userName=:userName")
	 User findByUsername(@Param("userName") String userName);
	
	

}
