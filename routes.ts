import { Router } from "./packages.ts";
import { SERVER_NAME } from "./env.js";

import Migrations from "./src/migrations/All.ts";

const router = new Router();

router.get("/api/v1", (context) => {
  context.response.body = { data: { greetings: `Hello from ${SERVER_NAME}!` } };
})
router.get("/api/v1/migrate", Migrations);

export default router;
