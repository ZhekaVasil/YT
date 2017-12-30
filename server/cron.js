const CronJob = require('cron').CronJob;
const YtAPI = require('./ytAPI').YtAPI;
const colors = require('colors');
const moment = require('moment');

const ytAPI = new YtAPI();

console.log('Cron Script is running'.yellow);
// Run job every 5 minute
// Params: cronTime, onTick, onComplete, startNow, timeZone, context, runOnInit, utcOffset
const job = new CronJob('00 */5 * * * *', () => {
  let time = moment().format('MM-DD-YYYY HH:mm:ss');
  // Make requests to get top YT videos and write result to JSONs
  console.log('================');
  console.log(`Job has started at ${time}`.green);
  console.log('================');
  ytAPI.getYTdata('allTime');
  ytAPI.getYTdata('lastHour');
  ytAPI.getYTdata('today');
  ytAPI.getYTdata('thisWeek');
  ytAPI.getYTdata('thisMonth');
  ytAPI.getYTdata('thisYear');
},() => {
  console.log('Jab stopped!'.yellow);
}, false, 'Europe/Minsk', null, true);
job.start();
