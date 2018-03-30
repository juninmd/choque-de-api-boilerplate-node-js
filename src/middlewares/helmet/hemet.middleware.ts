import * as Helmet from 'helmet';
import { Middleware, ExpressMiddlewareInterface } from 'routing-controllers';

@Middleware({ type: 'before' })
export class HelmetMiddleware implements ExpressMiddlewareInterface {
    use = Helmet()
}