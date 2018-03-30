import * as Raven from 'raven';
import { Middleware, ExpressMiddlewareInterface } from 'routing-controllers';

@Middleware({ type: 'before' })
export class SentryLogMiddleware implements ExpressMiddlewareInterface {
    use = Raven.requestHandler()
}