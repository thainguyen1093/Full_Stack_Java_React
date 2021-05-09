package com.app.core.rest.impl;

import com.app.core.constant.Constant;
import com.app.core.dto.PageContent;
import com.app.core.rest.BaseController;
import com.app.core.service.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;

/**
 * this class provide default all implementation for all necessary method that rest controller need
 */
public abstract class BaseControllerImpl<SERVICE extends BaseService<CRITERIA, CREATE, UPDATE, DTO, ENTITY, ID>, CRITERIA, CREATE, UPDATE, DTO, ENTITY, ID> implements BaseController<CRITERIA, CREATE, UPDATE, DTO, ID> {

  @Autowired
  private SERVICE service;

  @Override
  @GetMapping
  public ResponseEntity<PageContent<Page, DTO>> search(@Valid CRITERIA criteria,
                                                       @RequestParam(value = "page", defaultValue = "0") Integer page,
                                                       @RequestParam(value = "size", defaultValue = "100") Integer size) {
    PageContent<Page, DTO> dtoResult = service.search(criteria, page, size);
    return ResponseEntity.ok(dtoResult);
  }

  @Override
  @GetMapping(Constant.ID_PATH)
  public ResponseEntity<DTO> findById(@PathVariable ID id) {
    return service.findById(id)
        .map(ResponseEntity::ok) // 200 success
        .orElseGet(() -> ResponseEntity.notFound().build()); // 404 not found
  }

  @Override
  @PostMapping
  public ResponseEntity<DTO> create(@Valid @RequestBody CREATE create) {
    return service.create(create)
        .map(dto -> new ResponseEntity(HttpStatus.CREATED)) // 201 created
        .orElseGet(() -> ResponseEntity.badRequest().build()); // 400 bad request
  }

  @Override
  @PutMapping(Constant.ID_PATH)
  public ResponseEntity update(@NotBlank @PathVariable ID id, @Valid @RequestBody UPDATE update) {
    return service.update(id, update)
        .map(dto -> ResponseEntity.noContent().build()) // 204 no content
        .orElseGet(() -> ResponseEntity.badRequest().build()); // 400 bad request
  }

  @Override
  @DeleteMapping(Constant.ID_PATH)
  public ResponseEntity delete(@NotBlank @PathVariable ID id) {
    if (!service.findById(id).isPresent()) {
      return ResponseEntity.notFound().build(); // 404 not found
    }

    service.delete(id);
    return ResponseEntity.noContent().build(); // 204 no content
  }
}
