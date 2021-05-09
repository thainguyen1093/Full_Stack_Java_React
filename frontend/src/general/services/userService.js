import config from "../config/config.json";
import BaseApiService from "./common/baseApiService";

class UserService extends BaseApiService {
  constructor(path) {
    super(path);
  }
}

const userService = new UserService(config.path.user);
export default userService;
