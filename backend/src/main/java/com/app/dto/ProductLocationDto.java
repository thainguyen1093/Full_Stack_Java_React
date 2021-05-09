package com.app.dto;


public class ProductLocationDto {
  private Long id;

  private String address;

  private String city;

  private String zipCode;

  private String state;

  private ProductDto product;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getCity() {
    return city;
  }

  public void setCity(String city) {
    this.city = city;
  }

  public String getZipCode() {
    return zipCode;
  }

  public void setZipCode(String zipCode) {
    this.zipCode = zipCode;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public String getState() {
    return state;
  }

  public void setState(String state) {
    this.state = state;
  }

  public ProductDto getProduct() {
    return product;
  }

  public void setProduct(ProductDto product) {
    this.product = product;
  }
}
