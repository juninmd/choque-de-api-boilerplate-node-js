import * as express from 'express';
import * as status from 'express-status-monitor';
import { Middleware, ExpressMiddlewareInterface } from 'routing-controllers';

@Middleware({ type: 'after' })
export class SentryErrorMiddleware implements ExpressMiddlewareInterface {

    public use(req: express.Request, res: express.Response, next: express.NextFunction): any {
        return status({
            title: 'Express Status',
            path: '/api/status',
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
}