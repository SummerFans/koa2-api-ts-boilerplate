import {initArticle,createArticle} from '../../models/article';

export async function index(ctx){

    let title=ctx.query.title||'not title';
    let content=ctx.query.content||'not content';
    let author=ctx.query.author||'not author'

    let result = await createArticle(title,content,author);

    ctx.body={
        result:'helloWorld'
    };
    
}

//初始化数据库
export async function initDatabase(ctx){
    await initArticle();
    ctx.body={
        result:{
            initDatabses:true
        }
    }
}