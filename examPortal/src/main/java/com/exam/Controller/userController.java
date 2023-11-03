package com.exam.Controller;

import java.security.Principal;
import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.Repository.userRepo;
import com.exam.Service.userService;
import com.exam.entity.Role;
import com.exam.entity.User;
import com.exam.entity.userRole;

@RestController
@RequestMapping("/user")
//@CrossOrigin("*")
public class userController {

	@Autowired
	private userService userServices;

	@Autowired
	private userRepo userRepository;

	@Autowired
	private UserDetailsService userDetailsService;
	
//	@Autowired
//	private BCryptPasswordEncoder BcryptPasswordEncoder;

	//creating user
	@PostMapping("/saveUser")
	public User createUser(@RequestBody User user) throws Exception {
		
		//encoding bcryptpassencoder
		BCryptPasswordEncoder bcrypt =new BCryptPasswordEncoder();
		user.setPassword(bcrypt.encode(user.getPassword()));
		user.setPhoto("default.png");
		Set<userRole> roles =new HashSet<>();
		Role role=new Role();
		if(user.getProfile().equals("Normal")) {
			role.setRoleName("Normal");
			role.setRoleId(1L);
		}else if(user.getProfile().equals("Admin")) {
			role.setRoleId(2L);
			role.setRoleName("Admin");
		}
		userRole userRoles =new userRole();
		userRoles.setUser(user);
		userRoles.setRole(role);

		roles.add(userRoles);		
		return userServices.createUser(user, roles);
	}

		//get user
		@GetMapping("/user/{userName}")
		public User getUser(@PathVariable("userName") String userName) {
			return userServices.getUser(userName);
		}

//	//get user
//	@GetMapping("/user")
//	public User getUser() {
//		return userServices.getUser("riya.singh@gmail.com");
//	}

	//delete user
	@DeleteMapping("/delete/{Id}")
	public void deleteUser(@PathVariable("Id") Long Id) {
		userServices.deleteUser(Id);
	}

	//update user
	@PutMapping("/update/{Id}")
	public User updateUser(@PathVariable("Id") Long Id, @RequestBody User user) {
		return userServices.updateUser(Id,user);
	}

	@GetMapping("/{userName}/{password}/login")
	public User login(@PathVariable String userName,@PathVariable String password) {
		User user = userServices.verifyUser(userName,password);
		return user;
	}

	@GetMapping("/current-user")
	public User getCurrentUser(Principal principle) {
		return userRepository.findByUsername(principle.getName());
	}
	
	@PatchMapping("/updatePassword/{userName}/{oldPassword}/{newPassword}")
	public void updatePassword(@PathVariable("userName") String userName, 
			@PathVariable("oldPassword") String oldPassword,
			@PathVariable("newPassword") String newPassword) throws Exception {
		BCryptPasswordEncoder bcrypt =new BCryptPasswordEncoder();
		String newOne = bcrypt.encode(newPassword);
		userServices.updatePassword(oldPassword, newOne, userName);
	}
}
