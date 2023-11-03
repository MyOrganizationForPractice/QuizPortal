package com.exam.Service;

import java.util.Set;

import org.springframework.stereotype.Service;

import com.exam.entity.User;
import com.exam.entity.userRole;

@Service
public interface userService {
	
	public User createUser(User user,Set<userRole> userRoles) throws Exception;

	public User getUser(String userName);

	public void deleteUser(Long Id);

	public User updateUser(Long id, User user);

	public User verifyUser(String userName, String password);
	
	public void updatePassword(String oldPass, String newPass, String userName) throws Exception;

}
