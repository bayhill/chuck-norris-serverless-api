const utils = require("../utils");
const axios = require("axios");

module.exports.handler = async (context, req) => {
  context.log("Joke handler");

  const url = utils.getUrl();

  if (url) {
    const response = await axios({
      url: `${url}`,
      method: "get"
    });
    context.res = {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: response.data
    };
  } else {
    context.res = {
      status: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: "Can't find any fun stuff :("
    };
  }
};