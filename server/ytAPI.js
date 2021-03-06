const fetch = require('node-fetch');
const htmlparser = require("htmlparser2");
const fs = require('fs');
const queryString = require('query-string');
const colors = require('colors');


class YtAPI {
  constructor(){
    this.ytUrl = 'https://www.youtube.com/results';
    this.parserAttr = 'data-context-item-id';
    this.ignoreParseAttr = 'data-ad-impressions';
    this.parserTag = 'div';
    this.jsonFolder = __dirname + '/../datajson';

    this.apiKey = 'AIzaSyAuJhmsup-LSHQP5N114ooVNZ9xd35MA7E';
    this.apiEndPoint = 'https://www.googleapis.com/youtube/v3/';

    this.searchParams = {
      search_query : 'site:youtube.com',
    };

    this.filters = {
      filterParam: 'sp',
      allTime: {
        filter: 'CAMSAhAB',
        jsonName: 'allTime'
      },
      lastHour: {
        filter: 'CAMSBAgBEAE%3D',
        jsonName: 'lastHour'
      },
      today: {
        filter: 'CAMSBAgCEAE%3D',
        jsonName: 'today'
      },
      thisWeek: {
        filter: 'CAMSBAgDEAE%3D',
        jsonName: 'thisWeek'
      },
      thisMonth: {
        filter: 'CAMSBAgEEAE%3D',
        jsonName: 'thisMonth'
      },
      thisYear: {
        filter: 'CAMSBAgFEAE%3D',
        jsonName: 'thisYear'
      }
    };

    this.messages = {
      cantFetchAPI: `Can't fetch API for top %s`,
      cantParse : `Can't parse top %s HTML page from YouTube`,
      cantGet : `Can't get top %s HTML page from YouTube`,
      cantSave: `Can't save top %s to JSON`,
      saved: `Top %s Saved! Length %s`,
      allIsOk: `All is OK!`
    }
  }

  /**
   * Get HTML page from YT
   * then parse it to get id of top videos
   * and write result to json file
   *
   * @param {Object} params Object with URL params
   * @param {String} jsonName Name of created json file
   */
  performAction(params, jsonName) {
    let urlParams = queryString.stringify(params);
    let url = `${this.ytUrl}?${urlParams}`;
    fetch(url).then(res => {
      return res.text();
    }).then(body => {
      let array = this.parsePage(body);
      if (array.length) {
        this.getDataFromAPI(array, jsonName).then(data => {
          data = data.sort((a, b) => b.statistics.viewCount - a.statistics.viewCount);
          this.writeToJson(data, jsonName);
        });
      } else {
        console.log(this.messages.cantParse.red, jsonName)
      }
    }).catch(() => {
      console.log(this.messages.cantGet.red, jsonName)
    })
  }

  /**
   * Get data for videos by ids using YT API
   *
   * @param {Array} ids Array of ids
   * @param {String} jsonName Name of created json file
   */
  getDataFromAPI(ids, jsonName) {
    const stringIds = ids.join(',');
    const url = this.apiEndPoint + 'videos?id=' + stringIds + '&key=' + this.apiKey + '&part=snippet,statistics';
    return fetch(url).then(res => res.json()).then(data => data.items).catch(() => {
      console.log(this.messages.cantFetchAPI.red, jsonName)
    });
  }

  /**
   * Create URL string and make fetch request
   *
   * @param {String} period Time period for getting top YT videos
   */
  getYTdata(period) {
    let settings = this.filters[period];
    let params = Object.assign(this.searchParams, {[this.filters.filterParam] : settings.filter});
    this.performAction(params, settings.jsonName);
  }

  /**
   * Parse YT page to get video's ids
   *
   * @param {String} page HTML page like string
   * @returns {Array} Array of ids
   */
  parsePage(page) {
    let ids = [];
    let parser = new htmlparser.Parser({
      onopentag: (name, attribs) => {
        if(name === this.parserTag && attribs[this.parserAttr] && !attribs[this.ignoreParseAttr]){
          ids.push(attribs[this.parserAttr]);
        }
      },
    }, {decodeEntities: true});
    parser.write(page);
    parser.end();
    return ids;
  }

  /**
   * Create JSON file with video's ids
   *
   * @param {Array} array Array of video's ids
   * @param {String} jsonName Name of json file
   */
  writeToJson(array, jsonName) {
    fs.writeFile(`${this.jsonFolder}/${jsonName}.json`, JSON.stringify(array), (err) => {
      if (err) {
        console.log(this.messages.cantSave.red, jsonName);
        console.log(err);
      } else {
        console.log(this.messages.saved.green, jsonName, array.length);
      }
    });
  }

}

module.exports.YtAPI = YtAPI;
