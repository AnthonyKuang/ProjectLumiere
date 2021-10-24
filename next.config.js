module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'pbs.twimg.com',
    ],
  },
  pageExtensions: ['mdx', 'tsx', 'ts', 'jsx', 'js'],
  webpack(config) {
    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        {
          loader: 'xdm/webpack.cjs',
          options: {
            remarkPlugins: [
              require('remark-gfm'),
              require('remark-unwrap-images'),
              require('remark-emoji'),
              require('remark-hint'),
            ],
            rehypePlugins: [
              [require('rehype-wrap'), { wrapper: 'main' }],
              require('rehype-slug'),
              [require('@jsdevtools/rehype-toc'), { position: 'afterend' }],
              require('@mapbox/rehype-prism'),
            ],
          },
        },
      ],
    });

    return config;
  },
  experimental: {
    esmExternals: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
