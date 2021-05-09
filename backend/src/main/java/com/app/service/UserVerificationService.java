package com.app.service;

import com.app.dao.UserRepository;
import com.app.dao.UserVerificationRepository;
import com.app.dto.UserVerificationDto;
import com.app.entity.User;
import com.app.entity.UserVerification;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Random;

@Service
public class UserVerificationService {

  @Autowired
  private UserVerificationRepository userVerificationRepository;

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private MailService mailService;

  public Optional<UserVerificationDto> findByUserIdAndVerificationCode(Long userId, String verificationCode) {
    return userVerificationRepository.findByUserIdAndVerificationCode(userId, verificationCode)
        .map(this::fromEntityToDto);
  }

  public void sendVerificationCode(Long userId) {
    setVerificationCode(userId);
    Optional<User> userO = userRepository.findById(userId);
    String verificationCode = userVerificationRepository.findByUserId(userId)
        .map(UserVerification::getVerificationCode)
        .orElse(null);

    String mailTo = userO.map(User::getEmail).orElse(null);
    String userName = userO.map(User::getUsername).orElse(null);

    String mailSubject = "Verification code for your Hulahooh account";
    String mailFrom = "asdproject287@gmail.com";
    String mailContent = "Hello " + userName + ",\n" +
        "We got your reset password request for Hulahooh account.\n" +
        "Please use below code to verify your reset password process: \n" + verificationCode;
    mailService.sendEmail(mailFrom, mailTo, mailSubject, mailContent);
  }

  private void setVerificationCode(Long userId) {
    String verificationCode = generateVerificationCode();
    UserVerification userVerification = userVerificationRepository.findByUserId(userId).orElse(null);
    if (userVerification == null) {
      userVerification = new UserVerification();
      userVerification.setUserId(userId);
      userVerification.setVerificationCode(verificationCode);
    } else {
      userVerification.setVerificationCode(verificationCode);
    }
    userVerificationRepository.save(userVerification);
  }

  private String generateVerificationCode() {
    int leftLimit = 48; // numeral '0'
    int rightLimit = 122; // letter 'z'
    int targetStringLength = 6;
    Random random = new Random();
    String generatedString = random.ints(leftLimit, rightLimit + 1)
        .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
        .limit(targetStringLength)
        .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
        .toString();
    return generatedString;
  }

  private UserVerificationDto fromEntityToDto(UserVerification entity) {
    UserVerificationDto dto = new UserVerificationDto();
    BeanUtils.copyProperties(entity, dto);
    return dto;
  }
}
