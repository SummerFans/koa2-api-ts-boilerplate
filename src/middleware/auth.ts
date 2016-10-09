import CONF from '../config';

//用户认证
export async function userAUTH(ctx, next) {
    //未做用户认证
    return next();
}

//接口访问认证
export async function apiAUTH(ctx, next) {

    //未做接口认证
    return next();
}