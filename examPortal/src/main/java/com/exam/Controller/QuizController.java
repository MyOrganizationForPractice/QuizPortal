package com.exam.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.Service.QuizService;
import com.exam.entity.Category;
import com.exam.entity.Quiz;

@RestController
@RequestMapping("/quiz")
public class QuizController {
	
	@Autowired
	private QuizService quizService;
	
	// update quiz
	@PostMapping("/save")
	public ResponseEntity<Quiz> createQuiz(@RequestBody Quiz quiz){
		Quiz  q= this.quizService.addQuiz(quiz);
		 return ResponseEntity.ok(q);
	}
	
	//update quiz
	@PutMapping("/")
	public Quiz updateQuiz(@RequestBody Quiz quiz) {
		return this.quizService.updateQuiz(quiz);
	}

	//getAll quiz
	@GetMapping("/")
	public List<Quiz> getAllQuiz(){
		return this.quizService.getAllQuiz();
	}
	
	//get single quiz
	@GetMapping("/{quizId}")
	public Quiz getQuiz(@PathVariable("quizId") Long quizId) {
		return this.quizService.getQuiz(quizId);
	}
	
	//delete quiz
	@DeleteMapping("/{quizId}")
	public void deleteQuiz(@PathVariable("quizId") Long quizId) {
		 this.quizService.deleteQuiz(quizId);
	}
	
	//get quiz og this category
	@GetMapping("/category/{categoryId}")
	public List<Quiz> getAllQuizOfthisCategory(@PathVariable("categoryId") Long categoryId){
		Category cat = new Category();
		cat.setCid(categoryId);
		return this.quizService.getQuizOfCategory(cat);
		
	}
	
	//getAll active quiz
		@GetMapping("/activeQuiz")
		public List<Quiz> getAllActiveQuiz(){
			return this.quizService.getAllActiveQuiz();
		}
}
