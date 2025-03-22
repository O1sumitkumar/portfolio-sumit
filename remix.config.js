// remix.config.js
const vercel = require("@remix-run/vercel");

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
export default {
  serverBuildTarget: "vercel",
  server: vercel,
  // ...other config options
  ignoredRouteFiles: ["**/.*"],
  serverBuildPath: "build/index.js",
  serverModuleFormat: "esm",
};
