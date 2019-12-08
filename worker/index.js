var cron = require('node-cron');
const fetchGithub = require('./task/fetch-github');

cron.schedule('*/30 * * * *', fetchGithub);
