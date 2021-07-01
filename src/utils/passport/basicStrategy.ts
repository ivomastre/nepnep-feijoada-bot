import { BasicStrategy } from 'passport-http'
import {
  AUTH_USER,
  AUTH_PASSWORD
} from '../../config/env';
export function createBasicStrategy(){
  return new BasicStrategy(
    function(username, password, cb){
      // success
      if(username == AUTH_USER && AUTH_PASSWORD == password)  return cb(null, {})

      // failure
      return cb(null, false)
    }
  )
}
