import { Router } from 'express';
import { nextTick } from 'process';
import { FACEBOOK_ACCESS_TOKEN, FACEBOOK_API_VERSION } from '../config/env';
import Bot from '../utils/bot';

const facebookRoutes = Router();

facebookRoutes.get(
  '/',
  (async (req, res, next) => {
    try {
        const facebookBot = new Bot(FACEBOOK_ACCESS_TOKEN, FACEBOOK_API_VERSION)
        await facebookBot.postToFacebook()
        return res.sendStatus(200)
    }
    catch(err){
        next(err)
    }
  })
);

export default facebookRoutes;
