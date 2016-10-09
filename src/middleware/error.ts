export function errorMiddleware() {
  return async (ctx, next) => {
    try {
      await next()
    } catch (err) {
      ctx.status = err.status || 500
      ctx.body = {
        code:ctx.status,
        msg:err.message
      }
      ctx.app.emit('error', err, ctx)
    }
  }
}
