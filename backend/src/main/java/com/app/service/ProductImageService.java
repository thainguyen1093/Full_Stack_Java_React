package com.app.service;

import com.app.core.dto.EmptyDto;
import com.app.core.service.impl.BaseServiceImpl;
import com.app.dao.ProductImageRepository;
import com.app.dao.ProductRepository;
import com.app.dto.ProductImageDto;
import com.app.dto.create.ProductImageCreate;
import com.app.entity.ProductImage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductImageService extends BaseServiceImpl<ProductImageRepository, EmptyDto, ProductImageCreate, EmptyDto, ProductImageDto, ProductImage, Long> {

  @Autowired
  private ProductRepository productRepository;

  @Override
  public ProductImage fromCreateToEntity(ProductImageCreate productImageCreate) {
    ProductImage entity = super.fromCreateToEntity(productImageCreate);
    Long productId = productImageCreate.getProductId();
    if (productId != null) {
      entity.setProduct(productRepository.findById(productId).orElse(null));
    }
    return entity;
  }
}
