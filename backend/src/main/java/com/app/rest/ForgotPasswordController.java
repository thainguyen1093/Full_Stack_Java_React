package com.app.rest;

import com.app.dto.request.NewPasswordRequest;
import com.app.dto.request.SendCodeRequest;
import com.app.dto.response.ForgotPasswordAccountResponse;
import com.app.service.ForgotPasswordService;
import com.app.service.UserVerificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/forgotPassword")
public class ForgotPasswordController {

  @Autowired
  private ForgotPasswordService service;

  @Autowired
  private UserVerificationService userVerificationService;

  //click find username
  @GetMapping("/findByUsername")
  public ResponseEntity<ForgotPasswordAccountResponse> findByUsername(@RequestParam(value = "username") String userName) {
    return service.findByUserName(userName)
        .map(ResponseEntity::ok)
        .orElseGet(() -> ResponseEntity.badRequest().build());
  }

  @PostMapping("/sendCode")
  public ResponseEntity sendCode(@RequestBody SendCodeRequest request) {
    userVerificationService.sendVerificationCode(request.getId());
    return ResponseEntity.noContent().build();
  }

  @GetMapping("/verifyCode")
  public ResponseEntity verifyCode(@RequestParam(value = "id") Long id, // user id
                                   @RequestParam(value = "verificationCode") String verificationCode) {
    userVerificationService.findByUserIdAndVerificationCode(id, verificationCode);
    return ResponseEntity.noContent().build();
  }

  @PostMapping("/newPassword")
  public ResponseEntity newPassword(@RequestBody NewPasswordRequest request) {

    service.newPassword(request);
    return ResponseEntity.noContent().build();
  }
}

