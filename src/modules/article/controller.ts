import * as Koa from "koa"

import { getArticle, createArticle } from '../../models/article';

export async function list(ctx: Koa.Context, next: Function): Promise<void> {
    // ctx.
    // let result = await getArticle(ctx.query.offset);
    // ctx.body=result
    ctx.body = {
      results: [
        {
          title: 'Hello Wrold',
          content: 'Content'
        }
      ],
      count: 1
    }

}

export async function addArticle(ctx: Koa.Context, next: Function) {
    ctx.body = ctx.request.body;
}

//初始化数据库
export async function create(ctx: Koa.Context, next: Function): Promise<void>  {

    // let title=ctx.request.body.title||'not title';
    // let content=ctx.request.body.content||'not content';
    // let author=ctx.request.body.author||'not author'

    // let result = await createArticle(title,content,author);
    ctx.body = {
        result: 'success'
    };
}