import { Router, Request, Response, NextFunction } from 'express';
import { BaseController } from '@/controllers/base';

/**
 * Task controller
 *
 * @class TaskController
 */
export class TaskController extends BaseController {
  /**
   * Register routes.
   *
   * @override
   */
  public register(): Router {
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
   * Show all tasks.
   *
   * @param router {Router} Express Router object.
   */
  private index(router: Router): void {
    router.get('/', (req: Request, res: Response, next: NextFunction) => {
      try {
        res.send(`Tasks | TODO`);
        next();
      } catch (err) {
        next(err);
      }
    });
  }

  /**
   * Show specified task.
   *
   * @param router {Router} Express Router object.
   */
  private show(router: Router): void {
    router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
      try {
        const task: todo.model.Task = req.params;
        res.send(`Task:${task.id} | TODO`);
        next();
      } catch (err) {
        next(err);
      }
    });
  }

  /**
   * Update specified task.
   *
   * @param router {Router} Express Router object.
   */
  private update(router: Router): void {
    router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
      try {
        const task: todo.model.Task = req.params;
        res.send(`[UPDATED] Task:${task.id} | TODO \n [UPDATED] Task:${task.name} | TODO`);
        next();
      } catch (err) {
        next(err);
      }
    });
  }

  /**
   * Delete specified task.
   *
   * @param router {Router} Express Router object.
   */
  private destroy(router: Router): void {
    router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
      try {
        const task: todo.model.Task = req.params;
        res.send(`[DELETED] Task:${task.id} | TODO`);
        next();
      } catch (err) {
        next(err);
      }
    });
  }
}
