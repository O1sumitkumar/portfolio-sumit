import { cssBundlePlugin } from '@remix-run/css-bundle';

/** @type {import('@remix-run/dev').AppConfig} */
export default {
  assetsBuildDirectory: 'public/build',
  publicPath: '/build/',
  plugins: [cssBundlePlugin()],
};
