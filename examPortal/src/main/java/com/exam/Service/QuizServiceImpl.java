package com.exam.Service;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.Repository.QuizRepository;
import com.exam.entity.Category;
import com.exam.entity.Quiz;

@Service
public class QuizServiceImpl implements QuizService{

	@Autowired
	private QuizRepository quizRepo;
	
	@Override
	public Quiz addQuiz(Quiz quiz) {
		return this.quizRepo.save(quiz);
	}

	@Override
	public Quiz updateQuiz(Quiz quiz) {
		return this.quizRepo.save(quiz);
	}

	@Override
	public List<Quiz> getAllQuiz() {
		return (List<Quiz>) this.quizRepo.findAll();
	}

	@Override
	public Quiz getQuiz(Long quizId) {
		return this.quizRepo.findById(quizId).get();
	}

	@Override
	public void deleteQuiz(Long quizId) {
		this.quizRepo.deleteById(quizId);
	}

	@Override
	public List<Quiz> getQuizOfCategory(Category cat) {
		return this.quizRepo.getQuizByCategory(cat.getCid());
	}

	@Override
	public List<Quiz> getAllActiveQuiz() {
		
		return this.quizRepo.getAllActiveQuiz();
	}

}
