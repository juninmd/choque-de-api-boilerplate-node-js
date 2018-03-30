import 'reflect-metadata';
import './core/env.core';
import { PORT, ENV } from './settings.env';
import { createExpressServer as express, Action } from 'routing-controllers';

const app = express({
    authorizationChecker: async (action: Action, roles: string[]) => {
        const token = action.request.headers['authorization'];
        return true;
    },
    routePrefix: '/api',
    cors: true,
    controllers: [`${__dirname}/controllers/*.js`],
    middlewares: [`${__dirname}/middlewares/**/*.js`],
    defaultErrorHandler: true,
});

console.info(`[API] Running! http://localhost:${PORT}/api | Environment: ${ENV}`)
app.listen(PORT);