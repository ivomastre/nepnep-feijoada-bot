import { Router } from 'express';
import passport from 'passport';

import facebookRoutes from './facebook.routes';


const routes = Router();

routes.use('/facebook', passport.authenticate('basic', { session: false }), facebookRoutes);

export default routes;
