package com.exam.Service;

import java.util.List;
import java.util.Set;

import com.exam.entity.Category;
import com.exam.entity.Quiz;

public interface QuizService {
	
	public Quiz addQuiz(Quiz quiz);
	
	public Quiz updateQuiz(Quiz quiz);
	
	public List<Quiz> getAllQuiz();
	
	public Quiz getQuiz(Long quizId);
	
	public void deleteQuiz(Long quizId);
	
	public List<Quiz> getQuizOfCategory(Category cat);
	
	public List<Quiz> getAllActiveQuiz();

}
