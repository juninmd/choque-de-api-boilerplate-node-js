import * as fs from 'fs';
import * as path from 'path';
import * as _ from 'lodash';

const envName = (process.env.NODE_ENV || 'test');
const missingTags: Array<string> = [];

function env(tag, value = '') {
    if (_.isEmpty(process.env[tag]) && _.isEmpty(value)) {
        missingTags.push(tag)
    }
    return (process.env[tag] || value);
}

const settings = {
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

if (missingTags.length > 0) {
    console.error(`[API] check the env/${envName}.env file contains all attributes and values`)
    console.error(`[API] Missing:`)

    for (let tag of missingTags) {
        console.error(tag);
    }

    process.exit(0);
}

export default settings;