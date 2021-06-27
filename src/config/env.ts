import dotenv from 'dotenv'
dotenv.config()

declare let process: {
    env: {
        FACEBOOK_ACCESS_TOKEN: string,
        NODE_ENV: 'prod' | 'dev' | 'test'
    }
}

export const {
    FACEBOOK_ACCESS_TOKEN = '',
    NODE_ENV = 'dev'
} = process.env