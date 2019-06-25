import DirectusSDK from "@directus/sdk-js";

export const client = new DirectusSDK({
  url: "http://localhost:7001/",
  project: "_",
  email: "admin@localhost.com",
  password: "directusrocks"
});
