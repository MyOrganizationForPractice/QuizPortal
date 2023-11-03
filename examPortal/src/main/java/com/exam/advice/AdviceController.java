package com.exam.advice;

import java.util.NoSuchElementException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice //global Exception class
public class AdviceController {

	//	@ExceptionHandler(NoSuchElementException.class)
	//	public ResponseEntity<String> handleNoSuchElementException(NoSuchElementException noSuchElementException){
	//		return new ResponseEntity<String>("No value is present in DB",HttpStatus.OK);
	//	}

}
