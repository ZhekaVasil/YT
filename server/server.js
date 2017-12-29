const YtAPI = require('./ytAPI').YtAPI;

const ytAPI = new YtAPI();

ytAPI.getYTdata('allTime');
ytAPI.getYTdata('lastHour');
ytAPI.getYTdata('today');
ytAPI.getYTdata('thisWeek');
ytAPI.getYTdata('thisMonth');
ytAPI.getYTdata('thisYear');


