import { Router, Request, Response, NextFunction } from 'express';
import { BaseController } from '@/controllers/base';

/**
 * IndexController
 *
 * @class IndexController
 */
export class IndexController extends BaseController {

  /**
   * Register routes.
   *
   * @override
   */
  public register(): Router {
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
   * @param router {Router} Express Router object.
   */
  private index(router: Router): void {
    router.get('/', (req: Request, res: Response, next: NextFunction) => {
      try {
        const data: Object = {};
        this.title = `Home | TODO`;
        this.csrfToken = req.csrfToken();
        console.log(this.csrfToken);
        this.render(req, res, 'index', data);
        next();
      } catch (err) {
        next(err);
      }
    });
  }
}
