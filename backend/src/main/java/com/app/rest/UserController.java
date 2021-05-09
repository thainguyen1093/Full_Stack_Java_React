package com.app.rest;

import com.app.core.rest.impl.BaseControllerImpl;
import com.app.dto.UserDto;
import com.app.dto.create.UserCreate;
import com.app.dto.criteria.UserCriteria;
import com.app.dto.update.UserUpdate;
import com.app.entity.User;
import com.app.service.UserService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController extends BaseControllerImpl<UserService, UserCriteria, UserCreate, UserUpdate, UserDto, User, Long> {

}
