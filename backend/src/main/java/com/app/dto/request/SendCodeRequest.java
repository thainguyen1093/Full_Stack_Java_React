package com.app.dto.request;

public class SendCodeRequest {

  private Long id;

  private String recoverMethod;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getRecoverMethod() {
    return recoverMethod;
  }

  public void setRecoverMethod(String recoverMethod) {
    this.recoverMethod = recoverMethod;
  }
}
