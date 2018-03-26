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
    controllers: [__dirname + "/controllers/*.js"]
});

app.use(require('express-status-monitor')({
    title: 'Express Status',
    path: '/status',
    spans: [{
        interval: 1,
        retention: 60
    }, {
        interval: 5,
        retention: 60
    }, {
        interval: 15,
        retention: 60
    }],
    chartVisibility: {
        cpu: true,
        mem: true,
        load: true,
        responseTime: true,
        rps: true,
        statusCodes: true
    }
}));

console.info(`[API] Rodando! http://localhost:${port}/api`)
app.listen(port);