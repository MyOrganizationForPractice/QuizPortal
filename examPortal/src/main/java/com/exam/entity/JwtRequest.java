package com.exam.entity;

import lombok.Builder;

@Builder
public class JwtRequest {

	private String username;
	private String password;
	public JwtRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	public JwtRequest(String email, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	public String getusername() {
		return username;
	}
	public void setusername(String password) {
		this.username = password;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "JwtRequest [email=" + username + ", password=" + password + "]";
	}



}
