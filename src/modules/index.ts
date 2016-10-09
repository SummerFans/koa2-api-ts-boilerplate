import * as glob from 'glob';
import * as Router from 'koa-router';
import * as convert from 'koa-convert';

import CONF from '../config';

exports = module.exports = function initModules(app) {
  glob(`${__dirname}/*`, { ignore: '**/index.js*' }, (err, matches) => {
    if (err) { throw err }

    matches.forEach((mod) => {
      const router = require(`${mod}/router`)

      const routes = router.default
      const baseUrl = router.baseUrl

      //增加版本号
      const instance = new Router({ prefix: '/'+CONF.VERSION+baseUrl })

      routes.forEach((config) => {
        const {
          method = '',
          route = '',
          handlers = []
        } = config

        const lastHandler = handlers.pop()

        instance[method.toLowerCase()](route, ...handlers, async function(ctx) {
          return await lastHandler(ctx)
        })
        
        app.use(instance.routes())
        app.use(instance.allowedMethods())
      })
    })
  })
}



/**
 * 公共配置
 */
/**
 * @apiDefine HTTP_AUTH
 * @apiHeader {String} x-ga-id 接口访问ID.
 * @apiHeader {String} x-ga-key 接口访问KEY.
 */

/**
 * @apiDefine USER_AUTH
 * @apiHeader {String} x-ga-userId 用户编号.
 * @apiHeader {String} x-ga-sessionToken 用户sessiontokne
 */

/**
 * @apiDefine TokenError
 * @apiError NoAccessRight 用户访问权限错误
 * @apiError Unauthorized 接口认证失败
 *
 * @apiErrorExample {json} Unauthorized-Error:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "code": 401,
 *       "error": "Unauthorized"
 *     }
 */