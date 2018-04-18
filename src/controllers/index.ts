import { Router, Request, Response, NextFunction } from 'express';
import { BaseController } from './base';

/**
 * IndexController
 *
 * @class IndexController
 */
export class IndexController extends BaseController {

  /**
   * Create routes.
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
   * Show home.
   *
   * @param router {Router} The express Router object.
   */
  private index(router: Router): void {
    router.get('/', (req: Request, res: Response, next: NextFunction) => {
      this.title = `Home | TODO`;
      this.render(req, res, 'index');
      next();
    });
  }
}
