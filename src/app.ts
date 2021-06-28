import Bot from './utils/bot'
import schedule from 'node-schedule';
import { FACEBOOK_ACCESS_TOKEN, NODE_ENV } from './config/env'
import { connectDb } from './db';


connectDb()
const facebookBot = new Bot(FACEBOOK_ACCESS_TOKEN)
schedule.scheduleJob('0 * * * *', async function(){
    await facebookBot.postToFacebook()
});
(async () => await facebookBot.postToFacebook())()
if(NODE_ENV == 'dev') console.log('Bot has started 🐒') 