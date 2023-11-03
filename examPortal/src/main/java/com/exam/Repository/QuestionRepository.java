package com.exam.Repository;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.exam.entity.Question;
import com.exam.entity.Quiz;

@Repository
public interface QuestionRepository extends CrudRepository<Question,Long>{

	Set<Question> findByQuiz(Quiz quiz);
	
	@Query("Select question from Question question WHERE question.quiz=:qId")
	List<Question> findAllQuiz(@Param("qId") Quiz qId);

}
