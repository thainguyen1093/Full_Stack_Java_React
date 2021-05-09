package com.app.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.app.enums.Status;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.time.LocalDate;
import java.util.List;

@Entity
public class Product {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;

  private Boolean active = true;

  private String status;

  private LocalDate createdDate;

  private LocalDate updatedDate;

  @OneToMany(mappedBy="product")
  @JsonIgnore
  private List<ProductImage> productImageList;

  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "product_location_id", referencedColumnName = "id")
  @JsonIgnore
  private ProductLocation productLocation;

  @ManyToOne
  @JoinColumn(name="user_id")
  @JsonIgnore
  private User user;

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

  public Boolean getActive() {
    return active;
  }

  public void setActive(Boolean active) {
    this.active = active;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public LocalDate getCreatedDate() {
    return createdDate;
  }

  public void setCreatedDate(LocalDate createdDate) {
    this.createdDate = createdDate;
  }

  public LocalDate getUpdatedDate() {
    return updatedDate;
  }

  public void setUpdatedDate(LocalDate updatedDate) {
    this.updatedDate = updatedDate;
  }

  public List<ProductImage> getProductImageList() {
    return productImageList;
  }

  public void setProductImageList(List<ProductImage> productImageList) {
    this.productImageList = productImageList;
  }

  public ProductLocation getProductLocation() {
    return productLocation;
  }

  public void setProductLocation(ProductLocation productLocation) {
    this.productLocation = productLocation;
  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }
}
