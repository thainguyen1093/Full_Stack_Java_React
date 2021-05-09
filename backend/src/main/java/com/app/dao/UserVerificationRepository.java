package com.app.dao;

import com.app.entity.UserVerification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.Optional;

public interface UserVerificationRepository extends JpaRepository<UserVerification, Long>, JpaSpecificationExecutor<UserVerification> {
  Optional<UserVerification> findByUserId(Long userId);

  Optional<UserVerification> findByUserIdAndVerificationCode(Long userId, String verificationCode);
}
