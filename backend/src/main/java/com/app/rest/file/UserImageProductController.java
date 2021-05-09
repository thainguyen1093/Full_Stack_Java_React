package com.app.rest.file;

import com.app.service.PathService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/image/user/product")
public class UserImageProductController extends ImageController {

  @Autowired
  private PathService pathService;

  @Override
  public String getPath() {
    return pathService.getUserImageProductPath();
  }
}
