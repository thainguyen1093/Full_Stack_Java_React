package com.app.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class PathService {
  @Value("${project.app.file.path.root}")
  private String rootPath;

  @Value("${project.app.file.path.admin}")
  private String adminPath;

  @Value("${project.app.file.path.user}")
  private String userPath;

  @Value("${project.app.file.path.image}")
  private String imagePath;

  @Value("${project.app.file.path.product}")
  private String productPath;

  public String getUserPath() {
    return rootPath + userPath;
  }

  public String getUserImagePath() {
    return rootPath + userPath + imagePath;
  }

  public String getUserImageProductPath() {
    return rootPath + userPath + imagePath + productPath;
  }

  public String getAdminPath() {
    return rootPath + adminPath;
  }

  public String getAdminImagePath() {
    return rootPath + adminPath + imagePath;
  }
}
