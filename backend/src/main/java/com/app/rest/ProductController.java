package com.app.rest;

import com.app.core.constant.Constant;
import com.app.core.dto.PageContent;
import com.app.dto.ProductDto;
import com.app.dto.create.ProductCreate;
import com.app.dto.criteria.ProductCriteria;
import com.app.dto.update.ProductUpdate;
import com.app.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;

@RestController
@RequestMapping("/product")
public class ProductController {

  @Autowired
  private ProductService service;

  @GetMapping
  public ResponseEntity<PageContent<Page, ProductDto>> search(@Valid ProductCriteria criteria,
                                                       @RequestParam(value = "page", defaultValue = "0") Integer page,
                                                       @RequestParam(value = "size", defaultValue = "100") Integer size) {
    PageContent<Page, ProductDto> dtoResult = service.search(criteria, page, size);
    return ResponseEntity.ok(dtoResult);
  }

  @GetMapping(Constant.ID_PATH)
  public ResponseEntity<ProductDto> findById(@PathVariable Long id) {
    return service.findById(id)
        .map(ResponseEntity::ok) // 200 success
        .orElseGet(() -> ResponseEntity.notFound().build()); // 404 not found
  }

  @PostMapping
  public ResponseEntity<ProductDto> create(@Valid ProductCreate create,
                                           @RequestParam(name="files", required = false) MultipartFile[] files) {
    return service.create(create, files)
        .map(dto -> new ResponseEntity(HttpStatus.CREATED)) // 201 created
        .orElseGet(() -> ResponseEntity.badRequest().build()); // 400 bad request;
  }

  @PostMapping(Constant.ID_PATH)
  public ResponseEntity update(@NotBlank @PathVariable Long id, @Valid ProductUpdate update,
                               @RequestParam(name="files", required = false) MultipartFile[] files) {
    return service.update(id, update, files)
        .map(dto -> ResponseEntity.noContent().build()) // 204 no content
        .orElseGet(() -> ResponseEntity.badRequest().build()); // 400 bad request
  }
}
