'use strict';

const got = require('got');
const cheerio = require('cheerio');
const SLACK_URL = require('./slack.config.json').URL;

const crawler = () => {
  let result;

  return got('https://www.naver.com').then(res => {
    const $ = cheerio.load(res.body);

    result = $('.ca_item .ca_a');

    return got(SLACK_URL, {
      method: "post",
      body: JSON.stringify({text: result.text()})
    });

  })
}

crawler();