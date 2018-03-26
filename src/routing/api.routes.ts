import { Router, Request, Response } from 'express';
import { HomeController } from '../controllers/home.controller';
import * as express from 'express';


export default class ApiRoute {

    constructor(app: express.Application) {
        this.registerRoutes(app);
    }

    registerRoutes(app: express.Application) {
        const BaseRouter: Router = Router();
        BaseRouter.get('/', (req: Request, res: Response) => {
            res.send("Hello World");
        });

        app.use('/', BaseRouter)
        app.use('/home', HomeController)
    }
}
