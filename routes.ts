import { Router } from "./packages.ts";
import { SERVER_NAME } from "./env.js";
const router = new Router();

router.get("/api/v1", (context) => {
  context.response.body = { data: { greetings: `Hello from ${SERVER_NAME}!` } };
});

export default router;
