import * as configService from "./configService";
import * as api from "../api";

class BaseApiService {
  constructor(path) {
    this.path = path;
  }

  getPath() {
    return this.path;
  }

  getURL() {
    return configService.getFullURL(this.getPath());
  }

  search(data) {
    return api.search(this.getURL(), data);
  }

  getById(id) {
    return api.getById(this.getURL(), id);
  }

  create(data) {
    return api.create(this.getURL(), data);
  }

  update(id, data) {
    return api.update(this.getURL(), id, data);
  }

  deleteById(id) {
    api.deleteById(this.getURL(), id);
  }
}

export default BaseApiService;
