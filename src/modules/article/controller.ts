import {getArticle,createArticle} from '../../models/article';

export async function list(ctx){

    let result = await getArticle(ctx.query.offset);
    ctx.body=result
    
}

//初始化数据库
export async function create(ctx){

    let title=ctx.request.body.title||'not title';
    let content=ctx.request.body.content||'not content';
    let author=ctx.request.body.author||'not author'

    let result = await createArticle(title,content,author);

    ctx.body={
        result:'success'
    };
}