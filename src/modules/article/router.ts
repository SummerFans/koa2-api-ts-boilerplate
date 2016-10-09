import * as article from './controller'

export const baseUrl = '/article'

export default [
  {
    method:"GET",
    route:'/',
    handlers:[
      article.list
    ]
  },
  {
    method:"GET",
    route:'/post',
    handlers:[
      article.create
    ]
  }
]