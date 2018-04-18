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
    this.update(router);
    this.destroy(router);
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
      try {
        res.send(`User | TODO`);
        next();
      } catch (err) {
        next(err);
      }
    });
  }

  /**
   * Show specified user.
   *
   * @param router {Router} Express Router object.
   */
  private show(router: Router): void {
    router.get('/:uid', (req: Request, res: Response, next: NextFunction) => {
      try {
        const user: app.model.User = req.params;
        res.send(`User:${user.uid} | TODO`);
        next();
      } catch (err) {
        next(err);
      }
    });
  }

  /**
   * Update specified user.
   *
   * @param router {Router} Express Router object.
   */
  private update(router: Router): void {
    router.put('/:uid', (req: Request, res: Response, next: NextFunction) => {
      try {
        const user: app.model.User = req.params;
        res.send(`[UPDATED] User:${user.uid} | TODO`);
        next();
      } catch (err) {
        next(err);
      }
    });
  }

  /**
   * Delete specified user.
   *
   * @param router {Router} Express Router object.
   */
  private destroy(router: Router): void {
    router.delete('/:uid', (req: Request, res: Response, next: NextFunction) => {
      try {
        const user: app.model.User = req.params;
        res.send(`[DELETED] User:${user.uid} | TODO`);
        next();
      } catch (err) {
        next(err);
      }
    });
  }
}
