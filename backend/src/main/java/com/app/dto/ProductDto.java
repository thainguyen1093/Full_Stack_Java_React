package com.app.dto;

import com.app.dto.create.ProductLocationCreate;

import java.util.List;

public class ProductDto {

  private Long id;

  private String name;

  private String status;

  private String createdDate;

  private String updateDate;

  private List<ProductImageDto> productImageList;

  private ProductLocationDto productLocation;

  private UserDto user;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public String getCreatedDate() {
    return createdDate;
  }

  public void setCreatedDate(String createdDate) {
    this.createdDate = createdDate;
  }

  public String getUpdateDate() {
    return updateDate;
  }

  public void setUpdateDate(String updateDate) {
    this.updateDate = updateDate;
  }

  public List<ProductImageDto> getProductImageList() {
    return productImageList;
  }

  public void setProductImageList(List<ProductImageDto> productImageList) {
    this.productImageList = productImageList;
  }

  public ProductLocationDto getProductLocation() {
    return productLocation;
  }

  public void setProductLocation(ProductLocationDto productLocation) {
    this.productLocation = productLocation;
  }

  public UserDto getUser() {
    return user;
  }

  public void setUser(UserDto user) {
    this.user = user;
  }
}
