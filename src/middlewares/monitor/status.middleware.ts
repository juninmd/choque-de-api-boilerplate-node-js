import * as status from 'express-status-monitor';
import { Middleware, ExpressMiddlewareInterface } from "routing-controllers";

@Middleware({ type: "after" })
export class SentryErrorMiddleware implements ExpressMiddlewareInterface {

    use = status({
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
    })
}