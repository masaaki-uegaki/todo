import { Router, Request, Response, NextFunction } from 'express';
import { BaseController } from './base';

/**
 * / User controller
 *
 * @class UserController
 */
export class UserController extends BaseController {
  /**
   * Create routes.
   *
   * @override
   */
  public create(): Router {
    const router = Router();
    this.index(router);
    this.show(router);
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
   * Show all users.
   *
   * @param router {Router} Express Router object.
   */
  private index(router: Router): void {
    router.get('/', (req: Request, res: Response, next: NextFunction) => {
      res.send(`User | TODO`);
      next();
    });
  }

  /**
   * Show specified user.
   *
   * @param router {Router} Express Router object.
   */
  private show(router: Router): void {
    router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
      res.send(`User:${req.params.id} | TODO`);
      next();
    });
  }
}
