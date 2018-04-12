import * as fs from 'fs';
import * as dotenv from 'dotenv';

const env = (process.env.NODE_ENV || 'test');
const path = `env/.${env}.env`
const exist = fs.existsSync(path)
if (!exist) {
    console.error(`[API] please create file '.${env}.env' in env/`)
    console.error(`[API] check the example 'env/SAMPLE.md'`)
    process.exit(0);
}
else {
    dotenv.config({ path })
}