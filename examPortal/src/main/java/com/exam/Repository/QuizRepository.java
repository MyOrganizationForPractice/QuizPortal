package com.exam.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.exam.entity.Quiz;

@Repository
public interface QuizRepository extends CrudRepository<Quiz, Long>{
	
	@Query("Select q from Quiz q WHERE q.category.cid=:catId AND q.active=true")
	public List<Quiz> getQuizByCategory(@Param("catId") Long catId);
	
	@Query("select q from Quiz q Where q.active=true")
	public List<Quiz> getAllActiveQuiz();

}
