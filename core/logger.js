const bunyan = require('bunyan');
const PrettyStream = require('bunyan-prettystream');
const cfg = require('../config/settings');

const prettyStdOut = new PrettyStream({
  mode: 'short',       // long | short | dev
});
prettyStdOut.pipe(process.stdout);

module.exports = (name) => {
  const logName = name || 'default';
  const logger = bunyan.createLogger({
    name: logName,
    streams: [{
      level: cfg.logLevel,
      type: 'raw',
      stream: prettyStdOut,
    }],
  });

  return logger;
};
