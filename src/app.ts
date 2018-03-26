import * as express from 'express';
import ApiRoute from './routing/api.routes';

const app: express.Application = express();
const port: number = (Number(process.env.PORT || '3000'));

new ApiRoute(app);

app.listen(port, () => {
    console.log(`App Works at http://localhost:${port}/`);
});