const CronJob = require('cron').CronJob;
const YtAPI = require('./ytAPI').YtAPI;

const ytAPI = new YtAPI();

// Run job every minute
const job = new CronJob('00 */1 * * * *', () => {
  // Make requests to get top YT videos and write result to JSONs
  ytAPI.getYTdata('allTime');
  ytAPI.getYTdata('lastHour');
  ytAPI.getYTdata('today');
  ytAPI.getYTdata('thisWeek');
  ytAPI.getYTdata('thisMonth');
  ytAPI.getYTdata('thisYear');
},() => {
  console.log('Jab stopped!');
}, false, 'America/Los_Angeles');

job.start();
