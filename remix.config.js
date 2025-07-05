import { cssBundlePlugin } from '@remix-run/css-bundle';

/** @type {import('@remix-run/dev').AppConfig} */
export default {
  serverBuildTarget: 'cloudflare-pages',
  server: './server.js',
  assetsBuildDirectory: 'public/build',
  publicPath: '/build/',
  plugins: [cssBundlePlugin()],
};
