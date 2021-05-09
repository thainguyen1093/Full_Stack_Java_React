package com.app.service.file;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;


@Service
public class ImageService extends FileService {

  @Override
  public HttpHeaders buildHeader(String fileName, boolean isDownload) {
    HttpHeaders header = new HttpHeaders();
    header.add(HttpHeaders.CONTENT_DISPOSITION, String.format("%s; filename=%s", isDownload ? "attachment" : "inline", fileName));
    header.add("Cache-Control", "no-cache, no-store, must-revalidate");
    header.add("Pragma", "no-cache");
    header.add("Expires", "0");

    return header;
  }


}
