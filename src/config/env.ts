import dotenv from 'dotenv'
dotenv.config()

declare let process: {
    env: {
        FACEBOOK_ACCESS_TOKEN: string,
        NODE_ENV: 'prod' | 'dev' | 'test',
        DATABASE_URL: string,
        DB_NAME: string
    }
}

export const {
    FACEBOOK_ACCESS_TOKEN = '',
    NODE_ENV = 'dev',
    DATABASE_URL = '',
    DB_NAME = ''
} = process.env