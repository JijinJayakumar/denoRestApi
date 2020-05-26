import { Application } from "./packages.ts";

import { APP_PORT, APP_HOST, SERVER_NAME } from "./src/config/env.js";
import router from "./routes.ts";
import _404 from "./src/errors/404.ts";
import errorHandler from "./src/errors/errorHandler.ts";

const app = new Application();

app.use(errorHandler);
app.use(router.routes());
app.use(router.allowedMethods({
  throw: true,
  notImplemented: () => console.log("not implemented"),
  methodNotAllowed: () => console.log("Method not allowed"),
}));
app.use(_404);

console.log(`${SERVER_NAME} Listening on port ${APP_HOST} ${APP_PORT}...`);

await app.listen(`${APP_HOST}:${APP_PORT}`);
