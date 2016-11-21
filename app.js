const app = require('express')();
const cfg = require('./config/settings');
const log = require('./core/logger')('app');

app.listen(cfg.port, () => {
  log.info(`API listening on http://localhost:${cfg.port}`);
});
