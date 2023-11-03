package com.exam.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

import com.exam.Repository.userRepo;


@Configuration
class MyJWTConfig implements UserDetailsService{

	@Autowired 
	private  userRepo userRepository;
	@Autowired
	
	

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration builder) throws Exception {
		return builder.getAuthenticationManager();
	}
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		com.exam.entity.User user = this.userRepository.findByUsername(username);
		if(user == null) {
			System.out.println("User Not found");
			return null;
		}else {
			UserDetails userDetails = User.builder().
					username(user.getUserName())
//					.password(passwordEncoder().encode(user.getPassword())).
					.password(user.getPassword()).
					build();
			return userDetails;
		}
	}
}