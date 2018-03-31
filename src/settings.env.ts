import * as path from 'path';

export default {
    api: {
        port: (Number(process.env.PORT || '3000')),
        env: (process.env.NODE_ENV || ''),
        prefix: '/api',
        dirs: {
            controllers: [path.join(__dirname, 'controllers/*.controller{.js,.ts}')],
            middlewares: [path.join(__dirname, `middlewares/**/*.middleware{.js,.ts}`)],
        }
    },
    logs: {
        sentryToken: (process.env.SENTRY_TOKEN || '')
    }
}