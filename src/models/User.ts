import { DATA_TYPES, Model } from "../../packages.ts";

class User extends Model {
  static table = "users";
  static timestamps = true;

  static fields = {
    id: {
      primaryKey: true,
      autoIncrement: true,
    },
    name: DATA_TYPES.STRING,
    email: DATA_TYPES.STRING,
    password: DATA_TYPES.STRING,
  };

  static defaults = {
    created_at: new Date().toLocaleString(),
  };
}

export default User;
