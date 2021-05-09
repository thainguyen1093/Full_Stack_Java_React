import config from "../config/config.json";
import BaseApiService from "./common/baseApiService";

class ProductService extends BaseApiService {
  constructor(path) {
    super(path);
  }
}

const productService = new ProductService(config.path.product);
export default productService;