import mongoose from 'mongoose';
import { DATABASE_URL, DB_NAME } from './config/env';
 
import PostImages from './models/postImages';
import PostTemplate from './models/postTemplate';
 
const connectDb = () => {
  return mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true, dbName: DB_NAME });
};
 
const models = { PostImages, PostTemplate };
 
export { connectDb };
 
export default models;