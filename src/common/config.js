import { config } from 'dotenv'

config()

export const BASE_URL_API = process.env.REACT_APP_BASE_URL_API
export const MODE_DEV = process.env.REACT_APP_MODE_DEV
export const STORAGE = process.env.REACT_APP_STORAGE
