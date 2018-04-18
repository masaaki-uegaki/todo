import { Router, Request, Response, NextFunction } from 'express';
import { BaseController } from './base';

/**
 * IndexController
 *
 * @class IndexController
 */
export class IndexController extends BaseController {

  /**
   * Create the routes.
   *
   * @override
   */
  public create(): Router {
    const router = Router();
    this.index(router);
    return router;
  }

  /**
   * Constructor
   *
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * The home page route.
   *
   * @param req {Request} The express Request object.
   * @param res {Response} The express Response object.
   * @param next {NextFunction} Execute the next method.
   */
  public index(router: Router): void {
    router.get('/', (req: Request, res: Response, next: NextFunction) => {
      this.title = `Home | TODO`;
      this.render(req, res, 'index');
    });
  }
}