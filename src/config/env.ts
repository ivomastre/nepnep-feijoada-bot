import dotenv from 'dotenv'
dotenv.config()

declare let process: {
    env: {
        FACEBOOK_ACCESS_TOKEN: string,
        NODE_ENV: 'prod' | 'dev' | 'test',
        DATABASE_URL: string,
        DB_NAME: string,
        FACEBOOK_ID: string,
        IMGBB_KEY: string,
        FACEBOOK_API_VERSION: string
    }
}

export const {
    FACEBOOK_ACCESS_TOKEN = '',
    NODE_ENV = 'dev',
    DATABASE_URL = '',
    DB_NAME = '',
    FACEBOOK_ID = '',
    IMGBB_KEY = '',
    FACEBOOK_API_VERSION = '11.0'
} = process.env