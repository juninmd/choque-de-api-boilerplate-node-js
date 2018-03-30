import * as Raven from 'raven';
import { Middleware, ExpressErrorMiddlewareInterface } from 'routing-controllers';
import { SENTRY_TOKEN } from '../../settings.env';

Raven.config(SENTRY_TOKEN).install();

@Middleware({ type: 'after' })
export class SentryErrorMiddleware implements ExpressErrorMiddlewareInterface {

    error = Raven.errorHandler()
}