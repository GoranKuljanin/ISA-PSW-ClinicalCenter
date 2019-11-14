package com.klinickiCentar.controllers;

public class User {
	private String username;
	private String password;
	private String email;
	private String lastname;
	private String adress;
	private String city;
	private String country;
	private String phone;
	private String isPacijent;
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getAdress() {
		return adress;
	}
	public void setAdress(String adress) {
		this.adress = adress;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getIsPacijent() {
		return isPacijent;
	}
	public void setIsPacijent(String isPacijent) {
		this.isPacijent = isPacijent;
	}
	@Override
	public String toString() {
		return "User [username=" + username + ", password=" + password + ", email=" + email + ", lastname=" + lastname
				+ ", adress=" + adress + ", city=" + city + ", country=" + country + ", phone=" + phone + "]";
	}
}
