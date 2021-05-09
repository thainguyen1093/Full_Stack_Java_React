package com.app.dto.request;

public class NewPasswordRequest {
  private Long id;

  private String verificationCode;

  private String newPassword;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getVerificationCode() {
    return verificationCode;
  }

  public void setVerificationCode(String verificationCode) {
    this.verificationCode = verificationCode;
  }

  public String getNewPassword() {
    return newPassword;
  }

  public void setNewPassword(String newPassword) {
    this.newPassword = newPassword;
  }
}
