/**
 * @file App environment
 * @module config/environment
 * @author LRboy
 */


export const environment = process.env.NODE_ENV
export const isDevEnv = Object.is(environment, 'development')
export const isProdEnv = Object.is(environment, 'production')


export const APP_CONFIG = {
    API_URL: isDevEnv ? 'http://localhost:8000': 'http://localhost:8000'
}