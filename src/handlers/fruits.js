const utils = require("../utils");
const axios = require("axios");

let fruits = ['Apple', 'Banana']

module.exports.handler = async (context, req) => {
  context.log("Fruit handler");
  context.log(req);

  if (req.method == "GET") {
    response = {
      data: fruits
    }
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
      body: "please provide a word for me to count :("
    };
  }
};