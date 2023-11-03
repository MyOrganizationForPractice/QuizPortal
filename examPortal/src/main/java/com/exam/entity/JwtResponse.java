package com.exam.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class JwtResponse {

	//	 public JwtResponse(String jwtToken) {
	//		 this.jwtToken=jwtToken;
	//		// TODO Auto-generated constructor stub
	//	}

	String jwtToken;

	String username;


	public JwtResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	//
	public String getJwtToken() {
		return jwtToken;
	}

	public void setJwtToken(String jwtToken) {
		this.jwtToken = jwtToken;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@Override
	public String toString() {
		return "JwtResponse [jwtToken=" + jwtToken + ", username=" + username + "]";
	}
	//
	//	public JwtResponse(String jwtToken, String username) {
	//		super();
	//		this.jwtToken = jwtToken;
	//		this.username = username;
	//	}
	//
	//

}
