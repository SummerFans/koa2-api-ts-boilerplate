import * as base from './controller'

export const baseUrl = ''

export default [
  {
    method:"GET",
    route:'/',
    handlers:[
      base.index
    ]
  },
  {
    method:"GET",
    route:'/init',
    handlers:[
      base.initDatabase
    ]
  }
]