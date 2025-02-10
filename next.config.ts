import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.(wav)$/,
  //     use: {
  //       loader: "file-loader",
  //       options: {
  //         name: "[name].[ext]",
  //         publicPath: `/_next/static/sounds/`,
  //         outputPath: `${options.isServer ? "../" : ""}static/sounds/`,
  //       },
  //     },
  //   });
  //   const fileLoaderRule = config.module.rules.find((rule) =>
  //     rule.test?.test?.(".svg"),
  //   );

  //   if (fileLoaderRule) {
  //     config.module.rules.push({
  //       ...fileLoaderRule,
  //       test: /\.svg$/i,
  //       resourceQuery: /url/, // *.svg?url
  //     });

  //     config.module.rules.push({
  //       test: /\.svg$/i,
  //       issuer: fileLoaderRule.issuer,
  //       resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
  //       use: ["@svgr/webpack"],
  //     });

  //     fileLoaderRule.exclude = /\.svg$/i;
  //   }

  //   return config;
  // },

  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.api-sports.io",
        port: "",
        pathname: "/**/**",
        search: "",
      },
    ],
  },
};

module.exports = nextConfig;
