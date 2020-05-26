import { Router } from "./packages.ts";
import { SERVER_NAME } from "./src/config/env.js";

import Migrations from "./src/migrations/All.ts";
import allUsers from "./src/controller/allUsers.ts";
import getUser from "./src/controller/getUser.ts";
import createUser from "./src/controller/createUser.ts";
import deleteUser from "./src/controller/deleteUser.ts";

const router = new Router();

router.get("/api/v1", (context) => {
  context.response.body = { data: { greetings: `Hello from ${SERVER_NAME}!` } };
});
router.get("/api/v1/migrate", Migrations);
router.get("/api/v1/users", allUsers);
router.get("/api/v1/users/:id", getUser);
router.post("/api/v1/users", createUser);
router.delete("/api/v1/users/:id", deleteUser);

export default router;
