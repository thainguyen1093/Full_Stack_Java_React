package com.app.rest.file;

import com.app.service.PathService;
import com.app.service.file.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping("/file")
public class FileController {

  @Autowired
  private FileService fileService;

  @Autowired
  private PathService pathService;

  @GetMapping(value = "/download/{fileName}")
  public ResponseEntity<Resource> download(@PathVariable String fileName) throws IOException {
    return build(getPath(), fileName, true);
  }

  @GetMapping(value = "/display/{fileName}")
  public ResponseEntity<Resource> display(@PathVariable String fileName) throws IOException {
    return build(getPath(), fileName, false);
  }

  public ResponseEntity<Resource> build(String pathString, String fileName, boolean isDownload) throws IOException {
    File file = new File(pathString + "/" + fileName);
    ByteArrayResource resource = fileService.get(pathString, fileName);

    HttpHeaders httpHeaders = fileService.buildHeader(fileName, isDownload);
    MediaType mediaType = MediaType.APPLICATION_OCTET_STREAM;

    return ResponseEntity.ok()
        .headers(httpHeaders)
        .contentLength(file.length())
        .contentType(mediaType)
        .body(resource);
  }

  public String getPath() {
    return pathService.getUserPath();
  }
}
