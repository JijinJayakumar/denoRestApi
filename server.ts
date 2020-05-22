import {
    Application
} from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts";
import _404 from "./src/errors/404.ts";
import errorHandler from "./src/errors/errorHandler.ts";

const port = 8080;

const app = new Application();

app.use(errorHandler);
app.use(router.routes());
app.use(router.allowedMethods({
    throw: true,
    notImplemented: () => console.log("not implemented"),
    methodNotAllowed: () => console.log("Method not allowed")
}));
app.use(_404);


const ServerName = "node".split("").sort().join("")
console.log(`${ServerName} Listening on port ${port}...`);

await app.listen({
    port
});