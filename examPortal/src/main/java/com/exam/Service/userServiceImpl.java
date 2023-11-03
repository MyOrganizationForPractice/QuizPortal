package com.exam.Service;

import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.exam.Repository.roleRepo;
import com.exam.Repository.userRepo;
import com.exam.custom.exception.BussinessException;
import com.exam.custom.exception.UserFoundException;
import com.exam.entity.User;
import com.exam.entity.userRole;

@Service
public class userServiceImpl implements userService {

	@Autowired
	private userRepo userRepository;

	@Autowired
	private roleRepo roleRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;


	//creating user
	@Override
	public User createUser(User user, Set<userRole> userRoles) throws Exception{

		User userFromDb =userRepository.findByUsername(user.getUserName());
		if(userFromDb!=null) {
			System.out.println("User is already in Db");
			throw new UserFoundException("Found User in DB!!!");
		}else {
			for(userRole ur: userRoles) {
				roleRepository.save(ur.getRole());
			}
			user.getUserRoles().addAll(userRoles);
			userFromDb = this.userRepository.save(user);
		}

		// TODO Auto-generated method stub
		return userFromDb;
	}

	//getting user by username
	@Override
	public User getUser(String userName) {
		User user = userRepository.findByUsername(userName);
		try {
			if(user==null) {
				//	throw new NoSuchElementException("user not found");
				throw new BussinessException("601","user Not found");
			}else {
				return user;
			}
		}catch(NoSuchElementException e) {
			throw new BussinessException("602","user Not found 2");
		}catch(Exception e) {
			throw new BussinessException("603","user Not found 3");
		}
	}
	//delete user
	@Override
	public void deleteUser(Long Id) {
		userRepository.deleteById(Id);

	}
	//update user
	@Override
	public User updateUser(Long id, User user) {
		Optional<User> userFromDb = userRepository.findById(id);
		User userdeata = userFromDb.get();
		userdeata.setEmail(user.getEmail());
		userdeata.setFirstName(user.getFirstName());
		userdeata.setLastName(user.getLastName());
		userdeata.setProfile(user.getProfile());
		userdeata.setPassword(user.getPassword());
		userdeata.setUserName(user.getUserName());
		userdeata.setPhone(user.getPhone());
		return userRepository.save(userdeata);

	}

	@Override
	public User verifyUser(String userName, String password) {
		User user = userRepository.findByUsername(userName);
		if(user==null) {
			user.setStatus("Invalid");
			return user;
		}else {
			if(user.getPassword().equals(password)) {
				user.setStatus("Valid");
				return user;
			}else {
				user.setStatus("Invalid");
				return user;
			}
		}
	}

	@Override
	public void updatePassword(String oldPass, String newPass, String userName) throws Exception {
		User user = userRepository.findByUsername(userName);	
		if(user==null) {
			System.out.println("invalid user comes in request");
			throw new Exception();
		}else {
			boolean result = passwordEncoder.matches(oldPass, user.getPassword());
			if(result) {
				user.setPassword(newPass);
				userRepository.save(user);
			}else {
			System.out.println("old pass are not matching");
			throw new Exception();
		}
	  }
	}
}
