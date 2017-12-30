const YtAPI = require('./ytAPI').YtAPI;

const ytAPI = new YtAPI();

// Make requests to get top YT videos and write result to JSONs
ytAPI.getYTdata('allTime');
ytAPI.getYTdata('lastHour');
ytAPI.getYTdata('today');
ytAPI.getYTdata('thisWeek');
ytAPI.getYTdata('thisMonth');
ytAPI.getYTdata('thisYear');

