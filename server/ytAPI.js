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
  }

  getHTML(params, jsonName) {
    let urlParams = queryString.stringify(params);
    let url = `${this.ytUrl}?${urlParams}`;
    return fetch(url).then(res => {
      return res.text();
    }).then(body => {
      let array = this.parsePage(body);
      if (array.length) {
        this.writeToJson(array, jsonName);
      } else {
        console.error(`Can't parse top ${jsonName} HTML page from YouTube`)
      }
    }).catch(() => {
      console.error(`Can't get top ${jsonName} HTML page from YouTube`)
    })
  }

  getYTdata(period) {
    let settings = this.filters[period];
    let params = Object.assign(this.searchParams, {[this.filters.filterParam] : settings.filter});
    return this.getHTML(params, settings.jsonName);
  }

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

  writeToJson(array, jsonName) {
    fs.writeFile(`${this.jsonFolder}/${jsonName}.json`, JSON.stringify(array), function (err) {
      if (err) {
        console.error(`Can't save top ${jsonName} to JSON`);
      } else {
        console.log(`Top ${jsonName} Saved! Length ${array.length}`);
      }
    });
  }

}

module.exports.YtAPI = YtAPI;
