package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

@Service
public class MailService {

  @Autowired
  JavaMailSender mailSender;

  @Async
  public void sendEmail(String MailFrom, String MailTo, String MailSubject, String MailContent) {
    MimeMessage mimeMessage = mailSender.createMimeMessage();

    try {
      MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
      mimeMessageHelper.setSubject(MailSubject);
      mimeMessageHelper.setFrom(new InternetAddress(MailFrom));
      mimeMessageHelper.setTo(MailTo);
      mimeMessageHelper.setText(MailContent);
      mailSender.send(mimeMessageHelper.getMimeMessage());

    } catch (MessagingException e) {
      e.printStackTrace();
    }
  }
}
