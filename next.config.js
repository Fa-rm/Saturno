/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false, // disable svgo optimization
          },
        },
        'url-loader',
      ],
    });

    return config;
  },
}

module.exports = nextConfig;
