const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://1gymyr5b.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;