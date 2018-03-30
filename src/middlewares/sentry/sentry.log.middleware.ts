import * as Raven from 'raven';
import { Middleware, ExpressMiddlewareInterface } from 'routing-controllers';
import { SENTRY_TOKEN } from '../../settings.env';

@Middleware({ type: 'before' })
export class SentryLogMiddleware implements ExpressMiddlewareInterface {
    use = Raven.requestHandler()
}