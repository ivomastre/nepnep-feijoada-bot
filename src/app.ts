import { connectDb } from './db';
import express, { Application } from 'express';
import routes from './routes';
import errorHandler from './middleware/errorHandler';
import passport from 'passport'
import { createBasicStrategy } from './utils/passport/basicStrategy';
import 'express-async-errors';
import notFoundHandler from './middleware/notFoundHandler';

class App {
  express: Application;

  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
    this.database();
  }

  private middlewares = (): void => {
    this.express.use(express.json());
  };

  private routes = (): void => {
    this.express.use(routes);
    this.express.use(passport.initialize());
    passport.use(createBasicStrategy());
    this.express.use(errorHandler);
    this.express.use(notFoundHandler);
  };

  private database = async (): Promise<void> => {
    await connectDb();
  };
}

export default App;
