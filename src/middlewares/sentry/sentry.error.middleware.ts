import * as Raven from 'raven';
import { Middleware, ExpressErrorMiddlewareInterface } from "routing-controllers";

Raven.config('token').install();

@Middleware({ type: "after" })
export class SentryErrorMiddleware implements ExpressErrorMiddlewareInterface {

    error = Raven.errorHandler()
}