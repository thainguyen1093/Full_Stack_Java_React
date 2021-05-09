package com.app.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.app.enums.Role;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.util.List;

@Entity
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String username;

  private String password;

  private String email;

  private String image;

  private Boolean active = true;

  @Enumerated(EnumType.STRING)
  private Role role = Role.USER;

  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "user_address_id", referencedColumnName = "id")
  @JsonIgnore
  private UserAddress userAddress;

  @OneToMany(mappedBy="user")
  @JsonIgnore
  private List<Product> productList;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public Boolean getActive() {
    return active;
  }

  public void setActive(Boolean active) {
    this.active = active;
  }

  public Role getRole() {
    return role;
  }

  public void setRole(Role role) {
    this.role = role;
  }

  public String getImage() {
    return image;
  }

  public void setImage(String image) {
    this.image = image;
  }

  public UserAddress getUserAddress() {
    return userAddress;
  }

  public void setUserAddress(UserAddress userAddress) {
    this.userAddress = userAddress;
  }

  public List<Product> getProductList() {
    return productList;
  }

  public void setProductList(List<Product> productList) {
    this.productList = productList;
  }

  @Override
  public String toString() {
    return "User{" +
        "id=" + id +
        ", username='" + username + '\'' +
        ", password='" + password + '\'' +
        ", email='" + email + '\'' +
        ", image='" + image + '\'' +
        ", active=" + active +
        ", role=" + role +
        '}';
  }
}
