import Koa from 'koa';
import Router from 'koa-router';
import Pug from 'koa-pug';
import serve from 'koa-static';
import path from 'path';
import Rollbar from 'rollbar';
import dotenv from 'dotenv';
import logger from 'koa-logger';
import views from 'koa-views';

export default () => {
  dotenv.config();
  const app = new Koa();
  const router = new Router();
  // const rollbar = new Rollbar({
  //   accessToken: process.env.ROLLBAR,
  //   captureUncaught: true,
  //   captureUnhandledRejections: true,
  // });
  console.log(__dirname + '/views');
  app.use(serve(path.join(__dirname, '..', 'dist')));
  app.use(views(__dirname + '/views/', { extension: 'pug' }));
  // app.use(async (ctx, next) => {
  //   try {
  //     await next();
  //   } catch (err) {
  //     rollbar.error(err, ctx.request);
  //   }
  // });
  router.get('/', async (ctx) => {
    await ctx.render('layouts/index');
  });
  app.use(router.routes());
  app.use(logger());
  // const pug = new Pug({
  //   viewPath: path.join(__dirname, 'views'),
  //   baseDir: path.join(__dirname, 'views'),
  // });
  // pug.use(app);
  return app;
};
