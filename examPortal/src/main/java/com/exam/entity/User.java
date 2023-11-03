package com.exam.entity;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;


@Entity
@Table(name="tbluser")
public class User{

	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	private Long id;
	private String userName;
	private String password;
	private String firstName;
	private String lastName;
	private String email;
	private String phone;
	private boolean isActive=true;
	private String profile;
	private String photo;

	private String Status;

	public String getStatus() {
		return Status;
	}

	public void setStatus(String status) {
		Status = status;
	}

	@OneToMany(cascade=CascadeType.ALL,fetch=FetchType.EAGER,mappedBy="user")
	@JsonIgnore
	private Set<userRole> userRoles =new HashSet<>();

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(Long id, String userName, String password, String firstName, String lastName, String email,
			String phone, boolean isActive, String profile, String photo, Set<userRole> userRoles) {
		super();
		this.id = id;
		this.userName = userName;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
		this.isActive = isActive;
		this.profile = profile;
		this.photo = photo;
		this.userRoles = userRoles;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public boolean isActive() {
		return isActive;
	}

	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}

	public String getProfile() {
		return profile;
	}

	public void setProfile(String profile) {
		this.profile = profile;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public Set<userRole> getUserRoles() {
		return userRoles;
	}

	public void setUserRoles(Set<userRole> userRoles) {
		this.userRoles = userRoles;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", userName=" + userName + ", password=" + password + ", firstName=" + firstName
				+ ", lastName=" + lastName + ", email=" + email + ", phone=" + phone + ", isActive=" + isActive
				+ ", profile=" + profile + ", photo=" + photo + ", userRoles=" + userRoles + "]";
	}


	//	@Override
	//	public Collection<? extends GrantedAuthority> getAuthorities() {
	//		Set<Authority> set=new HashSet<>();
	//		this.userRoles.forEach(userRole->{
	//			set.add(new Authority(userRole.getRole().getRoleName()));
	//		});
	//		return null;
	//	}
	//
	//	@Override
	//	public String getUsername() {
	//		// TODO Auto-generated method stub
	//		return null;
	//	}
	//
	//	@Override
	//	public boolean isAccountNonExpired() {
	//		// TODO Auto-generated method stub
	//		return true;
	//	}
	//
	//	@Override
	//	public boolean isAccountNonLocked() {
	//		// TODO Auto-generated method stub
	//		return true;
	//	}
	//
	//	@Override
	//	public boolean isCredentialsNonExpired() {
	//		// TODO Auto-generated method stub
	//		return true;
	//	}
	//
	//	@Override
	//	public boolean isEnabled() {
	//		// TODO Auto-generated method stub
	//		return true;
	//	}






}
