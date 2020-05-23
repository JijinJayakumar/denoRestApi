const env = Deno.env;

export const SERVER_NAME = "node".split("").sort().join("");
export const APP_HOST = env.APP_HOST || "localhost";
export const APP_PORT = env.APP_PORT || 8080;
