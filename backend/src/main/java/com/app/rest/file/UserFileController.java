package com.app.rest.file;

import com.app.service.PathService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/file/user")
public class UserFileController extends FileController {
  @Autowired
  private PathService pathService;

  @Override
  public String getPath() {
    return pathService.getUserPath();
  }
}
