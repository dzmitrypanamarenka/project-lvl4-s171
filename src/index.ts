import 'reflect-metadata';
import {createConnection} from 'typeorm';
// import container from 'container';
import User from './entity/User';
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
        return createConnection().then(async connection => {

            console.log("Inserting a new user into the database...");
            const user = new User();
            user.firstName = "Timber";
            user.lastName = "Saw";
            user.age = 25;
            await connection.manager.save(user);
            console.log("Saved a new user with id: " + user.id);

            console.log("Loading users from the database...");
            const users = await connection.manager.find(User);
            console.log("Loaded users: ", users);
            return await ctx.render('layouts/index', {u: users});

        }).catch(error => console.log(error));
    });
    app.use(router.routes());
    app.use(logger());
    return app;
};

