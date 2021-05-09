package com.app.dto.create;

public class ProductImageCreate {

  private Long productId;

  private String image;

  public String getImage() {
    return image;
  }

  public void setImage(String image) {
    this.image = image;
  }

  public Long getProductId() {
    return productId;
  }

  public void setProductId(Long productId) {
    this.productId = productId;
  }
}
