package com.app.service.file;


import com.app.service.PathService;
import com.app.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class FileService {

  public HttpHeaders buildHeader(String fileName, boolean isDownload) {
    HttpHeaders header = new HttpHeaders();
    header.add(HttpHeaders.CONTENT_DISPOSITION, String.format("%s; filename=%s", isDownload ? "attachment" : "inline", fileName));

    return header;
  }

  public List<String> save(MultipartFile[] files, String path) {
    return Arrays.asList(files).stream()
        .map(file -> save(file, path))
        .filter(Objects::nonNull)
        .collect(Collectors.toList());
  }

  public String save(MultipartFile file, String path) {
    try {
      Path to = Paths.get(path);
      if (!Files.exists(to)) {
        try {
          Files.createDirectories(to);
        } catch (IOException ioe) {
          ioe.printStackTrace();
        }
      }

      String fileExtension = Optional.ofNullable(file)
          .map(MultipartFile::getOriginalFilename)
          .filter(fileName -> fileName.contains("."))
          .map(fileName -> fileName.substring(fileName.lastIndexOf(".") + 1))
          .orElse("");

      String fileName = DateUtils.localDateTimeToString(LocalDateTime.now(), DateUtils.YYYYMMDD_HHMMSS_SSS);
      String filePath = path + "/" + fileName + "." + fileExtension;

      Files.copy(file.getInputStream(), Paths.get(filePath), StandardCopyOption.REPLACE_EXISTING);
      return "/" + fileName + "." + fileExtension;
    } catch (IOException e) {
      e.printStackTrace();
    }
    return null;
  }

  public ByteArrayResource get(String pathString, String fileName) throws IOException {
    File file = new File(pathString + "/" + fileName);

    Path path = Paths.get(file.getAbsolutePath());
    return new ByteArrayResource(Files.readAllBytes(path));
  }
}
