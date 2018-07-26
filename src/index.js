"use strict";
exports.__esModule = true;
var koa_1 = require("koa");
var koa_router_1 = require("koa-router");
var koa_views_1 = require("koa-views");
var koa_static_1 = require("koa-static");
var path_1 = require("path");
// import Rollbar from 'rollbar';
var dotenv_1 = require("dotenv");
var koa_logger_1 = require("koa-logger");
exports["default"] = (function () {
    dotenv_1["default"].config();
    var app = new koa_1["default"]();
    var router = new koa_router_1["default"]();
    // const rollbar = new Rollbar({
    //     accessToken: process.env.ROLLBAR,
    //     captureUncaught: true,
    //     captureUnhandledRejections: true,
    // });
    app.use(koa_static_1["default"](path_1["default"].join(__dirname, '..', 'dist')));
    // app.use(async (ctx, next) => {
    //     try {
    //         await next();
    //     } catch (err) {
    //         rollbar.error(err, ctx.request);
    //     }
    // });
    router.get('/', function (ctx) {
        ctx.render('layouts');
    });
    app.use(router.routes());
    app.use(koa_logger_1["default"]());
    app.use(koa_views_1["default"](__dirname + '/views', { extension: 'pug' }));
    return app;
});
