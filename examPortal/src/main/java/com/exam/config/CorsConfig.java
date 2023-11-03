package com.exam.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@Order(Ordered.HIGHEST_PRECEDENCE)
public class CorsConfig implements WebMvcConfigurer {

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
		.allowedOrigins("*")
		.allowedMethods("*")
		.allowedHeaders("*")
		.exposedHeaders("Access-Control-Allow-Origin");
	}

}

//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.core.Ordered;
//import org.springframework.core.annotation.Order;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//@Configuration
//@Order(Ordered.HIGHEST_PRECEDENCE)
//public class CorsConfig implements WebMvcConfigurer{
//	
//	@Override
//	public void addCorsMappings(CorsRegistry registry) {
//		registry.addMapping("/**").allowedOrigins("http://localhost:60819/")
//		.allowedMethods("GET", "PUT","POST", "DELETE")
//		.allowedHeaders("Content-Type", "Authorization");
//	}
//	
////	@Override
////	public void addCorsMappings(CorsRegistry registry) {
////		registry.addMapping("/**").allowedOrigins("**")
////		.allowedMethods("**")
////		.allowedHeaders("**");
////	}
//
//}