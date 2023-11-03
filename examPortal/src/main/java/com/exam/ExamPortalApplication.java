package com.exam;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.exam.Repository.roleRepo;
import com.exam.Service.userService;
import com.exam.entity.Role;
import com.exam.entity.User;
import com.exam.entity.userRole;

@SpringBootApplication
public class ExamPortalApplication {
	@Autowired
	private userService userServices;

	@Autowired
	private roleRepo replepository;

	public static void main(String[] args) {
		SpringApplication.run(ExamPortalApplication.class, args);
	}

	//	@Override
	//	public void run(String... args) throws Exception{
	//		System.out.println("starting");
	//		
	//		User user = new User();
	//		
	//		user.setFirstName("riya");
	//		user.setLastName("Singh");
	//		user.setPassword("Riya@12");
	//		user.setEmail("riya.singh@gmail.com");
	//		user.setUserName("riya.singh@gmail.com");
	//		user.setProfile("default.png");
	//		
	//		Role role1=new Role();
	//		role1.setRoleName("Admin");
	//		
	//		Role role2 = new Role();
	//		role2.setRoleName("Supervisor");
	//		
	//		Set<userRole> userRoleSet=new HashSet<>();
	//		userRole userRoles1=new userRole();
	//		userRoles1.setRole(role1);
	//		userRoles1.setUser(user);
	//		
	//		userRole userRoles2=new userRole();
	//		userRoles2.setRole(role2);
	//		userRoles2.setUser(user);
	//		
	//		
	//		userRoleSet.add(userRoles2);
	//		userRoleSet.add(userRoles1);
	//		
	//		
	//		User userData1 = this.userServices.createUser(user, userRoleSet);
	//		System.out.println("user data "+ userData1.getUserName());

	//		User user2 =new User();
	//		
	//		user2.setFirstName("banty");
	//		user2.setLastName("Singh");
	//		user2.setPassword("banty@12");
	//		user2.setUserName("banty@gmail.com");
	//		user2.setEmail("banty@gmail.com");
	//		
	//		Optional<Role> role3 = replepository.findById((long) 1);
	//		userRole userRoles3=new userRole();
	//		userRoles3.setRole(role3);
	//		userRoles3.setUser(user2);
	//		
	//		userRole userRoles4=new userRole();
	//		userRoles4.setRole(role2);
	//		userRoles4.setUser(user2);
	//		
	//		Set<userRole> userRoleSet2=new HashSet<>();
	//		userRoleSet2.add(userRoles3);
	//		userRoleSet2.add(userRoles4);
	//		
	//		User userData2 = this.userServices.createUser(user2, userRoleSet2);
	//		System.out.println("user data "+ userData2.getUserName());
	//	}
}
