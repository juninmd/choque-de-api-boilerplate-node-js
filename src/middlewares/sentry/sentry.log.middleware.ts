import * as Raven from 'raven';
import * as express from 'express';
import { Middleware, ExpressMiddlewareInterface } from 'routing-controllers';

@Middleware({ type: 'before' })
export class SentryLogMiddleware implements ExpressMiddlewareInterface {

    public use(req: express.Request, res: express.Response, next: express.NextFunction): any {
        return Raven.requestHandler()(req, res, next)
    }
}