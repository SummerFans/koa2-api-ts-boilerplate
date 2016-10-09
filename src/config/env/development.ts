//开发环境配置信息

//环境变量提取数据库配置
let DB=process.env.DB_SUMMER_DEV?JSON.parse(process.env.DB_SUMMER_DEV):{};

export default {

    HEAD_AUTH:{
        appId:'',
        appKey:''
    },
    
    PG_CONF:{
        user:(DB.USER||''),
        password:(DB.PWD||''),
        host:(DB.HOST||''),
        port:(DB.PORT||5432),
        database:(DB.DB||''),
        ssl:false,
        max:20,
        min:4,
        idleTimeoutMillis:1000
    }
}