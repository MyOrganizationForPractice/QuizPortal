package com.exam.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.exam.entity.Category;

@Repository
public interface CategoryRepository extends CrudRepository<Category, Long>{
	

}
