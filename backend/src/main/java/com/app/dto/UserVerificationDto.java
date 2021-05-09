package com.app.dto;


public class UserVerificationDto {

  private Long id;

  private String verificationCode;


  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getVerificationCode() {
    return verificationCode;
  }

  public UserVerificationDto setVerificationCode(String verificationCode) {
    this.verificationCode = verificationCode;
    return this;
  }
}
