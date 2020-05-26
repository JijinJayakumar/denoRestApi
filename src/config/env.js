const env = Deno.env;

export const SERVER_NAME = "node".split("").sort().join("");
export const APP_HOST = env.APP_HOST || "localhost";
export const APP_PORT = env.APP_PORT || 8080;
//datbase
export const DB_HOST = "localhost";
export const DB_NAME = "deno_rest_api";
export const DB_USER = "root";
export const DB_PASSWORD = "";
export const DB_PORT = 3306;
