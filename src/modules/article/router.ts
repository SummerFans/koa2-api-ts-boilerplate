import * as Router from 'koa-router';

import * as article from './controller';
export const baseUrl = '/article';

interface IRouter {
  method: string;
  route: string,
  handlers: Array<any>,
}

const routers:IRouter[] = [
  {
    method:"GET",
    route:'/',
    handlers:[
      article.list
    ]
  },
  {
    method:"POST",
    route:'/',
    handlers:[
      article.addArticle
    ]
  },
  // {
  //   method:"GET",
  //   route:'/post',
  //   handlers:[
  //     article.create
  //   ]
  // }
]

export default routers