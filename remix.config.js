// remix.config.js

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
export default {
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "esm",
  // Remove serverBuildTarget and serverBuildPath if they're causing issues
  future: {
    v3_lazyRouteDiscovery: true,
    v3_fetcherPersist: true,
    v3_relativeSplatPath: true,
    v3_singleFetch: true,
    v3_throwAbortReason: true,
  }
};
