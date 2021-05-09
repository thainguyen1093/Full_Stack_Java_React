package com.app.service;

import com.app.dao.UserRepository;
import com.app.dao.UserVerificationRepository;
import com.app.dto.request.NewPasswordRequest;
import com.app.dto.response.ForgotPasswordAccountResponse;
import com.app.entity.User;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class ForgotPasswordService {

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private UserVerificationRepository userVerificationRepository;

  @Autowired
  private BCryptPasswordEncoder bCryptPasswordEncoder;

  public Optional<ForgotPasswordAccountResponse> findByUserName(String userName) {
    Optional<User> userO = userRepository.findByUsername(userName);
    if (userO.isEmpty()) {
      userO = userRepository.findByEmail(userName);
    }

    return userO.map(this::fromEntityToDto);
  }

  public void newPassword(NewPasswordRequest request) {
    userVerificationRepository.findByUserIdAndVerificationCode(request.getId(), request.getVerificationCode())
        .ifPresent(userVerification -> {
          userRepository.findById(request.getId())
              .map(user -> {
                String password = bCryptPasswordEncoder.encode(request.getNewPassword());
                user.setPassword(password);
                return user;
              }).map(userRepository::save);
        });
  }

  private ForgotPasswordAccountResponse fromEntityToDto(User entity) {
    ForgotPasswordAccountResponse dto = new ForgotPasswordAccountResponse();
    BeanUtils.copyProperties(entity, dto);
    return dto;
  }
}
