export function errorMiddleware() {
  return async (ctx, next) => {
    try {
      await next()
      if (ctx.status === 404) {
        ctx.throw(404);
      }
    } catch (err) {
      ctx.status = err.status || 500;
      if (ctx.status === 404) {
        ctx.body = {
          code: ctx.status,
          msg: err.message
        }
      } else if (ctx.status === 500) {
        ctx.body = {
          code: ctx.status,
          msg: err.message
        }
      }
      ctx.app.emit('error', err, ctx)
    }
  }
}
