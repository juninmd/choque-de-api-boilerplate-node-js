import * as fs from 'fs';
import * as dotenv from 'dotenv';

let path = `.env-${process.env.NODE_ENV || 'test'}`
let exist = fs.existsSync(path)
if (!exist) {
    console.error(`[API] please create .env file in (${path})`)
    process.exit(0);
}
else {
    dotenv.config({ path })
}