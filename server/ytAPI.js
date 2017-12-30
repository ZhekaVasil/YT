const fetch = require('node-fetch');
const htmlparser = require("htmlparser2");
const fs = require('fs');
const queryString = require('query-string');

class YtAPI {
  constructor(){
    this.ytUrl = 'https://www.youtube.com/results';
    this.parserAttr = 'data-context-item-id';
    this.parserTag = 'div';
    this.jsonFolder = './src/app/datajson';

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
      cantParse : `Can't parse top %s HTML page from YouTube`,
      cantGet : `Can't get top %s HTML page from YouTube`,
      cantSave: `Can't save top %s to JSON`,
      saved: `Top %s Saved! Length %s`
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
  getHTML(params, jsonName) {
    let urlParams = queryString.stringify(params);
    let url = `${this.ytUrl}?${urlParams}`;
    fetch(url).then(res => {
      return res.text();
    }).then(body => {
      let array = this.parsePage(body);
      if (array.length) {
        this.writeToJson(array, jsonName);
      } else {
        console.error(this.messages.cantParse, jsonName)
      }
    }).catch(() => {
      console.error(this.messages.cantGet, jsonName)
    })
  }

  /**
   * Create URL string and make fetch request
   *
   * @param {String} period Time period for getting top YT videos
   */
  getYTdata(period) {
    let settings = this.filters[period];
    let params = Object.assign(this.searchParams, {[this.filters.filterParam] : settings.filter});
    this.getHTML(params, settings.jsonName);
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
        if(name === this.parserTag && attribs[this.parserAttr]){
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
        console.error(this.messages.cantSave, jsonName);
      } else {
        console.log(this.messages.saved, jsonName, array.length);
      }
    });
  }

}

module.exports.YtAPI = YtAPI;
