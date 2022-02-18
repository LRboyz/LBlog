/**
 * @file App environment
 * @module config/environment
 * @author LRboy
 */

import { Icon } from '@arco-design/web-react'

export const environment = process.env.NODE_ENV
export const isDevEnv = Object.is(environment, 'development')
export const isProdEnv = Object.is(environment, 'production')
export const IconFont = Icon.addFromIconFontCn({
  src: '//at.alicdn.com/t/font_2700222_mq6ajweycfm.js',
})

export const APP_CONFIG = {
  API_URL: isDevEnv ? 'https://lrboy.cn/api/v1.0' : 'http://localhost:8000',
}
