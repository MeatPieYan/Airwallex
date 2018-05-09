module.exports = () => async (ctx, next) => {
  if (ctx.request.path === '/') {
    return ctx.redirect(`${ctx.request.origin}/login`);
  }

  return next();
};
