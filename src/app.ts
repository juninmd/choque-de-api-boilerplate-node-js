import 'reflect-metadata';
import './core/env.core';
import { Application } from 'express';
import { createExpressServer as express, Action } from 'routing-controllers';
import _settings from './settings.env';

const app: Application = express({
    cors: true,
    classTransformer: false,
    routePrefix: _settings.api.prefix,
    defaultErrorHandler: false,
    controllers: _settings.api.dirs.controllers,
    middlewares: _settings.api.dirs.middlewares,
});

if (_settings.api.env != 'test') {
    console.info(`[API] Running! http://localhost:${_settings.api.port}/api | Environment: ${_settings.api.env}`)
    app.listen(_settings.api.port);
}

export default app;