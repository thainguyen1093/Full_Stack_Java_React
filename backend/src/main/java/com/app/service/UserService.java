package com.app.service;

import com.app.core.service.impl.BaseServiceImpl;
import com.app.dao.UserRepository;
import com.app.dto.UserDto;
import com.app.dto.create.UserCreate;
import com.app.dto.criteria.UserCriteria;
import com.app.dto.update.UserUpdate;
import com.app.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class UserService extends BaseServiceImpl<UserRepository, UserCriteria, UserCreate, UserUpdate, UserDto, User, Long> {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public User fromCreateToEntity(UserCreate create) {
        User entity = super.fromCreateToEntity(create);
      entity.setPassword(bCryptPasswordEncoder.encode(entity.getPassword()));
        return entity;
    }

    @Override
    public void delete(Long id) {
        User user = userRepository.getOne(id);
        user.setActive(false);
        userRepository.save(user);
    }
}
