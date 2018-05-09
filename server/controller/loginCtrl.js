const getData = async (ctx) => {
  console.log('body', ctx.request.body);

  // const data = await ctx.ajax.post('/prod/fake-auth', ctx.request.body);

  // if (data.errorMessage) {
  //   ctx.body = {
  //     success: false,
  //     msg: data.errorMessage,
  //     data: null
  //   };
  //   ctx.status = 200;

  //   return;
  // }

  // ctx.body = {
  //   success: false,
  //   msg: '',
  //   data
  // };
  ctx.status = 200;
};

module.exports = {
  getData
};
