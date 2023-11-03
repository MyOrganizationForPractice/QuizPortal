package com.exam.Service;

import java.util.List;
import java.util.Set;

import com.exam.entity.Question;
import com.exam.entity.Quiz;

public interface QuestionService {

	public Question addQuestion(Question question);
	
	public Question updateQuestion(Question question);
	
	public List<Question> getAllQuestion();
	
	public Question getQuestion(Long questionId);
	
	public void deleteQuestion(Long QuestionId);
	
	public List<Question> getQuestionsOfQuiz(Quiz quiz);

}
