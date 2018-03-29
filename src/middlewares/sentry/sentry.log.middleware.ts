import * as Raven from 'raven';
import { Middleware, ExpressMiddlewareInterface } from "routing-controllers";

Raven.config('token').install();

@Middleware({ type: "before" })
export class SentryLogMiddleware implements ExpressMiddlewareInterface {

    use = Raven.requestHandler()

}