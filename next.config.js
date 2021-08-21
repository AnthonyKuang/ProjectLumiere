// This controls how Next.js utilizes tools like Webpack and Babel to generate regular HTML, CSS, JS from the files in this folder
// See https://nextjs.org/docs/api-reference/next.config.js/introduction

module.exports = {
  reactStrictMode: true,
  experimental: {
    esmExternals: true,
  },
};
