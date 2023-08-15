/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    if (!isServer) {
      // eslint-disable-next-line no-param-reassign
      config.optimization.splitChunks.cacheGroups = {
        default: false,
        vendors: false,
      };
    }

    return config;
  },
};

module.exports = nextConfig;
