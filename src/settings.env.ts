import * as path from 'path';

function env(tag, value = '') {
    return (process.env[tag] || value);
}

export default {
    api: {
        port: Number(env('PORT', '3000')),
        env: env('NODE_ENV', 'development'),
        prefix: '/api',
        dirs: {
            controllers: [path.join(__dirname, 'controllers/*.controller{.js,.ts}')],
            middlewares: [path.join(__dirname, `middlewares/**/*.middleware{.js,.ts}`)],
        }
    },
    database: {
        dbname: env('DATABASE_DBNAME'),
        dialect: env('DATABASE_DIALECT'),
        username: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
        modelPaths: [path.join(__dirname, `models`)],
    },
    logs: {
        sentryToken: env('SENTRY_TOKEN')
    }
}