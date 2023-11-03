package com.exam.custom.exception;

public class UserFoundException extends Exception{

	public UserFoundException() {
		super("User Already present in DB !!!");
	}
	public UserFoundException(String msg) {
		super(msg);
	}
}
