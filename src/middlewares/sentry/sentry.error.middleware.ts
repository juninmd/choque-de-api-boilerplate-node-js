import * as Raven from 'raven';
import * as express from 'express';
import { Middleware, ExpressErrorMiddlewareInterface, HttpError } from 'routing-controllers';
import _settings from '../../settings.env';

Raven.config(_settings.logs.sentryToken).install();

@Middleware({ type: 'after' })
export class SentryErrorMiddleware implements ExpressErrorMiddlewareInterface {

    public error(error: HttpError, req: express.Request, res: express.Response, next: express.NextFunction): void {
        return Raven.errorHandler()(error, req, res, next)
    }
}