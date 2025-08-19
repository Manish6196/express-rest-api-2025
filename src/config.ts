const config = {
  env: process.env.NODE_ENV || 'development',
  debug: process.env.APP_DEBUG === 'true',
  port: parseInt(process.env.PORT || '3000'),
  appSecret: process.env.APP_SECRET || '',
  issuerBaseUrl: process.env.ISSUER_BASE_URL || '',
  audience: process.env.AUDIENCE || '',
};

export default config;
