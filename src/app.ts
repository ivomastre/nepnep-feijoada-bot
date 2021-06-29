import Bot from './utils/bot'
import schedule from 'node-schedule';
import { FACEBOOK_ACCESS_TOKEN, FACEBOOK_API_VERSION, NODE_ENV } from './config/env'
import { connectDb } from './db';
import http from 'http'

connectDb()
const facebookBot = new Bot(FACEBOOK_ACCESS_TOKEN, FACEBOOK_API_VERSION)

schedule.scheduleJob('0 * * * *', async function(){
    try {
        await facebookBot.postToFacebook()
    }
    catch(err){
        console.log(err)
    }
});

// workaround for free heroku
setInterval(() => {
  console.log("Ping!"); 
}, 1000);

// workaround for free heroku
http.createServer(function (req, res) {
  res.write('Pong!'); 
  res.end();
}).listen(process.env.PORT || '8080');

if(NODE_ENV == 'dev') {
    console.log('Bot has started 🐒');
    (() => facebookBot.postToFacebook())()
}

