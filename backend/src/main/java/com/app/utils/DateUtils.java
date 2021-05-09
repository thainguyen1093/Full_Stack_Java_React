package com.app.utils;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class DateUtils {
  public static final String YYYYMMDD_HHMMSS_SSS = "yyyyMMddHHmmssSSS";

  public static String localDateTimeToString(LocalDateTime localDateTime) {
    return localDateTimeToString(localDateTime, YYYYMMDD_HHMMSS_SSS);
  }

  public static String localDateTimeToString(LocalDateTime localDateTime, String pattern) {
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern(pattern);
    return localDateTime.format(formatter);
  }
}
