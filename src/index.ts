import Koa from 'koa';
import Router from 'koa-router';
import views from 'koa-views';
import serve from 'koa-static';
import path from 'path';
import dotenv from 'dotenv';
import logger from 'koa-logger';

export default () => {
    dotenv.config();
    const app = new Koa();
    const router = new Router();
    app.use(serve(path.join(__dirname, '..', 'dist')));
    app.use(views(path.join(__dirname, '/views'), { extension: 'pug' }));

    router.get('/', async (ctx: any):Promise<string> => {
        return await ctx.render('layouts/index');
    });
    app.use(router.routes());
    app.use(logger());
    return app;
};
