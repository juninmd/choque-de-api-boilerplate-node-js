import "reflect-metadata";
import { createExpressServer as express, Action } from "routing-controllers";
import * as controllers from "./controllers";
const port: number = (Number(process.env.PORT || '3000'));

const app = express({
    authorizationChecker: async (action: Action, roles: string[]) => {
        const token = action.request.headers["authorization"];
        return true;
    },
    routePrefix: "/api",
    cors: true,
    controllers: [__dirname + "/controllers/*.js"],
    middlewares: [__dirname + "/middlewares/**/*.js"],
    defaultErrorHandler: true,
});

console.info(`[API] Rodando! http://localhost:${port}/api`)
app.listen(port);