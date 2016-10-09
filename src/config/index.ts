import common from './common'

const env = process.env.NODE_ENV || 'development'
const config = require(`./env/${(env.toLowerCase())}`).default

export default Object.assign({env:env}, config,common)