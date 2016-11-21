const settings = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || '3000',
  logLevel: process.env.LOG_LEVEL || 'debug',
};

module.exports = settings;
