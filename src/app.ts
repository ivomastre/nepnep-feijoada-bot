import Bot from './utils/bot'
import schedule from 'node-schedule';
import { FACEBOOK_ACCESS_TOKEN, FACEBOOK_API_VERSION, NODE_ENV, AUTH_USER, AUTH_PASSWORD } from './config/env'
import { connectDb } from './db';
import http from 'http'
import { basic } from "http-auth";

connectDb()
const facebookBot = new Bot(FACEBOOK_ACCESS_TOKEN, FACEBOOK_API_VERSION)

const basicAuth = basic(
  {
    msg401: '401'
  },
  (username, password, cb) => {
    cb(username === AUTH_USER && password === AUTH_PASSWORD);
  }
);

http.createServer(basicAuth.check(async (req, res)=>{
  try{
    await facebookBot.postToFacebook()
    res.end(`Successfully posted on facebook`)
  }
  catch(err){
    res.statusCode = 500
    res.end(`${err.name}: ${err.message}`)
  }
})).listen(process.env.PORT || '8080');

if(NODE_ENV == 'dev') {
    console.log('Bot has started 🐒');
    facebookBot.postToFacebook()
}

