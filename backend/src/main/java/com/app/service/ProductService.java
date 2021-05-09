package com.app.service;

import com.app.core.dto.EmptyDto;
import com.app.core.service.impl.BaseServiceImpl;
import com.app.dao.ProductImageRepository;
import com.app.dao.ProductRepository;
import com.app.dao.UserRepository;
import com.app.dto.ProductDto;
import com.app.dto.ProductImageDto;
import com.app.dto.create.ProductCreate;
import com.app.dto.create.ProductImageCreate;
import com.app.dto.criteria.ProductCriteria;
import com.app.dto.update.ProductUpdate;
import com.app.entity.Product;
import com.app.entity.ProductImage;
import com.app.service.file.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductService extends BaseServiceImpl<ProductRepository, ProductCriteria, ProductCreate, ProductUpdate, ProductDto, Product, Long> {

  @Autowired
  private ImageService imageService;

  @Autowired
  private PathService pathService;

  @Autowired
  private ProductImageService productImageService;

  @Autowired
  private ProductImageRepository productImageRepository;

  @Autowired
  private ProductRepository repository;

  @Autowired
  private UserService userService;

  @Autowired
  private UserRepository userRepository;

  public Optional<ProductDto> create(ProductCreate create, MultipartFile[] files) {
    return Optional.ofNullable(create)
        .map(this::fromCreateToEntity)
        .map(repository::save)
        .map(entity -> afterCreate(entity, files))
        .map(this::fromEntityToDto);
  }

  public Optional<ProductDto> update(Long id, ProductUpdate update, MultipartFile[] files) {
    return Optional.ofNullable(id)
        .flatMap(repository::findById)
        .map(entity -> fromUpdateToEntity(update, entity))
        .map(repository::save)
        .map(entity -> afterUpdate(entity, files))
        .map(this::fromEntityToDto);
  }

  public Product fromCreateToEntity(ProductCreate create) {
    Product entity = super.fromCreateToEntity(create);

    Authentication auth = SecurityContextHolder.getContext().getAuthentication();
    String username = auth.getName();
    userRepository.findByUsername(username)
        .ifPresent(entity::setUser);

    return entity;
  }

  private Product afterCreate(Product entity, MultipartFile[] files) {
    if (files != null) {
      // save product image and add to product object
      List<ProductImage> productImageList = Arrays.asList(files).stream()
          .map(file -> imageService.save(file, pathService.getUserImageProductPath()))
          .filter(Objects::nonNull)
          .map(imageString -> newProductImageCreate(entity.getId(), imageString))
          .map(productImageService::create)
          .flatMap(Optional::stream)
          .map(ProductImageDto::getId)
          .map(productImageRepository::findById)
          .flatMap(Optional::stream)
          .collect(Collectors.toList());

      entity.setProductImageList(productImageList);
    }
    return entity;
  }

  private ProductImageCreate newProductImageCreate(Long productId, String image) {
    ProductImageCreate productImageCreate = new ProductImageCreate();
    productImageCreate.setProductId(productId);
    productImageCreate.setImage(image);
    return productImageCreate;
  }

  private Product afterUpdate(Product entity, MultipartFile[] files) {
    if (files != null) {
      // save product image and add to product object
      List<ProductImage> productImageList = Arrays.asList(files).stream()
          .map(file -> imageService.save(file, pathService.getUserImageProductPath()))
          .filter(Objects::nonNull)
          .map(imageString -> newProductImageCreate(entity.getId(), imageString))
          .map(productImageService::create)
          .flatMap(Optional::stream)
          .map(ProductImageDto::getId)
          .map(productImageRepository::findById)
          .flatMap(Optional::stream)
          .collect(Collectors.toList());

      entity.setProductImageList(productImageList);
    }
    return entity;
  }

  @Override
  public ProductDto fromEntityToDto(Product entity) {
    ProductDto dto = super.fromEntityToDto(entity);
    dto.setStatus(entity.getStatus());

    Optional.ofNullable(entity)
        .map(Product::getUser)
        .map(userService::fromEntityToDto)
        .ifPresent(dto::setUser);

    if (entity.getProductImageList() != null) {
      List<ProductImageDto> productImageDtoList = entity.getProductImageList().stream()
          .map(productImage -> {
            ProductImageDto productImageDto = new ProductImageDto();
            productImageDto.setImage(productImage.getImage());
            return productImageDto;
          }).collect(Collectors.toList());
      dto.setProductImageList(productImageDtoList);
    }

    return dto;
  }
}

