import * as Sequelize from 'sequelize';
import { IHEAD_AUTH } from "../config";


//开发环境配置信息
//环境变量提取数据库配置
let DB = process.env.DB_SUMMER_DEV ? JSON.parse(process.env.DB_SUMMER_DEV) : {};

const HEAD_AUTH: IHEAD_AUTH = {
    appId: '',
    appKey: ''
};

const PG_CONF: Sequelize.PoolOptions = {
    max: 20,
    min: 4,
    idle: 1000, //idleTimeoutMillis
}


export default {

    HEAD_AUTH,

    PG_CONF: {
        user: (DB.USER || 'postgres'),
        password: (DB.PWD || ''),
        host: (DB.HOST || '192.168.99.100'),
        port: (DB.PORT || 32768),
        database: (DB.DB || 'test'),
        ssl: false,
        max: 20,
        min: 4,
        idleTimeoutMillis: 1000
    }
}
