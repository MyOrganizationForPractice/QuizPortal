package com.exam.SecurityConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.exam.jwtAuthentication.JwtAuthenticationEntryPoint;
import com.exam.jwtAuthentication.JwtAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	@Autowired
	private JwtAuthenticationEntryPoint point;
	@Autowired
	private JwtAuthenticationFilter filter;

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

		http.csrf(csrf -> csrf.disable())
		.cors()
		.and()
		.authorizeHttpRequests(auth -> auth.requestMatchers("/auth/login").permitAll()
				.requestMatchers("/actuator/**").permitAll()
				.requestMatchers("/user/saveUser").permitAll()
				.requestMatchers("/user/user/{userName}").permitAll()
				.requestMatchers("/user/updatePassword/{userName}/{oldPassword}/{newPassword}").permitAll()
				.requestMatchers("/**")
				.authenticated()
				.anyRequest().authenticated())
		.exceptionHandling(ex -> ex.authenticationEntryPoint(point))
		.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

		http.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);

		return http.build();
	}
}

////
////import org.springframework.beans.factory.annotation.Autowired;
////import org.springframework.context.annotation.Bean;
////import org.springframework.context.annotation.Configuration;
////import org.springframework.security.config.annotation.web.builders.HttpSecurity;
////import org.springframework.security.config.http.SessionCreationPolicy;
////import org.springframework.security.web.SecurityFilterChain;
////import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
////
////import com.exam.jwtAuthentication.JwtAuthenticationEntryPoint;
////import com.exam.jwtAuthentication.JwtAuthenticationFilter;
////
////@Configuration
////public class SecurityConfig {
////
////@Autowired
////private JwtAuthenticationEntryPoint point;
////@Autowired
////private JwtAuthenticationFilter filter;
////
////@Bean
////public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
////
////    http.csrf(csrf -> csrf.disable())
//////    .cors(cors->cors.disable())
////    .authorizeHttpRequests(auth->auth.requestMatchers("/**")
////    		.authenticated().requestMatchers("/auth/login").permitAll()
////    .anyRequest().authenticated())
////    .exceptionHandling(ex->ex.authenticationEntryPoint(point))
////    .sessionManagement(session->session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
////    
////    http.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);
////                return http.build();
////                
////}
////
////}
//
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.core.Ordered;
//import org.springframework.core.annotation.Order;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//
//import com.exam.jwtAuthentication.JwtAuthenticationEntryPoint;
//import com.exam.jwtAuthentication.JwtAuthenticationFilter;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig {
//
// @Autowired
//    private JwtAuthenticationEntryPoint point;
//    @Autowired
//    private JwtAuthenticationFilter filter;
//
//    @Bean
//    @Order(Ordered.HIGHEST_PRECEDENCE)
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//
//        http.csrf(csrf -> csrf.disable())
//            .cors(cors -> cors.disable()) // Uncomment this line to disable default CORS configuration
//            .authorizeHttpRequests(auth -> auth.requestMatchers("/auth/login").permitAll()
//            .requestMatchers("/**")
//                .authenticated()
//                .anyRequest().authenticated())
//            .exceptionHandling(ex -> ex.authenticationEntryPoint(point))
//            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
//
//        http.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);
//        
//        return http.build();
//    }
//}

