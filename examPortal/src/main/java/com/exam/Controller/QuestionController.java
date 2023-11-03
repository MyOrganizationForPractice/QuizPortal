package com.exam.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

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

import com.exam.Service.QuestionService;
import com.exam.Service.QuizService;
import com.exam.entity.Question;
import com.exam.entity.Quiz;

import io.jsonwebtoken.lang.Collections;

@RestController
@RequestMapping("/question")
public class QuestionController {
	
	@Autowired
	private QuestionService questionService;
	
	@Autowired
	private QuizService quizService;
	
	//add the question
	@PostMapping("/save")
	public ResponseEntity<Question> addQuestion(@RequestBody Question question){
		Question q = this.questionService.addQuestion(question);
		return ResponseEntity.ok(q);
	}
	
	//update the question
	@PutMapping("/update")
	public Question updateQuestion(@RequestBody Question question) {
		Question q = this.questionService.updateQuestion(question);
		return q;
	}
	
	//get all question
	@GetMapping("/")
	public List<Question> getAllQuestion(){
		return this.questionService.getAllQuestion();
	}
	
	//get single question
	@GetMapping("/{questionId}")
	public Question getQuestion(@PathVariable("questionId") Long questionId) {
		return this.questionService.getQuestion(questionId);
	}

	//delete Query
	@DeleteMapping("/{questionId}")
	public void deleteQuery(@PathVariable("questionId") Long questionId) {
		this.questionService.deleteQuestion(questionId);
	}
	
	//get all question of any quiz
	@GetMapping("/quiz/{qid}")
	public ResponseEntity<List<Question>> getQuestionOfQuiz(@PathVariable("qid") Long qid){
		
//		Quiz quiz = new Quiz();
//		quiz.setqId(qid);
//		List<Question> al = this.questionService.getQuestionsOfQuiz(quiz);
//		return ResponseEntity.ok(al);
		Quiz quiz = this.quizService.getQuiz(qid);
		Set<Question> question = quiz.getQuestion();
		List<Question> list = new ArrayList(question);
		if(list.size()>Integer.parseInt(quiz.getNumberOfQuestion())) {
			list = list.subList(0, Integer.parseInt(quiz.getNumberOfQuestion()+1));
		}
		list.forEach(q->{
			q.setAnswer("");
		});
		//Collections.shuffle();
		return ResponseEntity.ok(list);
	}
	
	//get all quiz for admin
	@GetMapping("/quiz/all/{qid}")
	public ResponseEntity<List<Question>> getQuestionOfQuizForAdmin(@PathVariable("qid") Long qid){
		
		Quiz quiz = new Quiz();
		quiz.setqId(qid);
		List<Question> al = this.questionService.getQuestionsOfQuiz(quiz);
		return ResponseEntity.ok(al);
	
	}
	
	//evaluate quiz
	@PostMapping("/eval-quiz")
	public ResponseEntity<?> evaluateQuiz(@RequestBody List<Question> list){
		 System.out.println(list);
		double marksGot=0;
		int correctAnswer=0;
		int attempted=0;
		 for(Question q: list){
			Question question = this.questionService.getQuestion(q.getQuestionId());
			if(q.getGivenAnswer()!=null) {
			if(question.getAnswer().equals(q.getGivenAnswer())) {
				//correct
				correctAnswer++;
				double marksSingle= Double.parseDouble(list.get(0).getQuiz().getMaxMarks())/list.size();
	                marksGot+=marksSingle;
	           if(q.getGivenAnswer()!=null || !q.getGivenAnswer().equals("")){
		            attempted++;
		      }
			   }else {
				   attempted++;
			   }
		 }
		}
		 Map<String,Object> map = Map.of("marksGot",marksGot,"correctAnswer",correctAnswer,"attempted",attempted);
		return ResponseEntity.ok(map);
	}
	
}
