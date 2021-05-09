package com.app.rest.file;

import com.app.service.PathService;
import com.app.service.file.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
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
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/image")
public class ImageController extends FileController {

  @Autowired
  private ImageService imageService;

  @Autowired
  private PathService pathService;

  @GetMapping(value = "/download/{fileName}", produces = MediaType.IMAGE_PNG_VALUE)
  public ResponseEntity<Resource> download(@PathVariable String fileName) throws IOException {
    return build(getPath(), fileName, true);
  }

  @GetMapping(value = "/display/{fileName}", produces = MediaType.IMAGE_PNG_VALUE)
  public ResponseEntity<Resource> display(@PathVariable String fileName) throws IOException {
    return build(getPath(), fileName, false);
  }

  @Override
  public ResponseEntity<Resource> build(String stringPath, String fileName, boolean isDownload) throws IOException {
    File file = new File(stringPath + "/" + fileName);

    Path path = Paths.get(file.getAbsolutePath());
    ByteArrayResource resource = new ByteArrayResource(Files.readAllBytes(path));

    HttpHeaders httpHeaders = imageService.buildHeader(fileName, isDownload);
    MediaType mediaType = isDownload ? MediaType.APPLICATION_OCTET_STREAM : MediaType.IMAGE_PNG;

    return ResponseEntity.ok()
        .headers(httpHeaders)
        .contentLength(file.length())
        .contentType(mediaType)
        .body(resource);
  }

  @Override
  public String getPath() {
    return pathService.getUserImagePath();
  }
}
