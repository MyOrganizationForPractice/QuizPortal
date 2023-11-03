package com.exam.Service;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.Repository.QuestionRepository;
import com.exam.entity.Question;
import com.exam.entity.Quiz;

@Service
public class QuestionServiceImpl implements QuestionService{

	@Autowired
	private QuestionRepository questionRepo;
	
	@Override
	public Question addQuestion(Question question) {
		return this.questionRepo.save(question);
	}

	@Override
	public Question updateQuestion(Question question) {
		return this.questionRepo.save(question);
	}

	@Override
	public List<Question> getAllQuestion() {
		return  (List<Question>) this.questionRepo.findAll();
	}

	@Override
	public Question getQuestion(Long questionId) {
		return this.questionRepo.findById(questionId).get();
	}

	@Override
	public void deleteQuestion(Long QuestionId) {
		this.questionRepo.deleteById(QuestionId);
		
	}

	@Override
	public List<Question> getQuestionsOfQuiz(Quiz quiz) {
		return (List<Question>) this.questionRepo.findAllQuiz(quiz);
	}

}
