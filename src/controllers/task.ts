import { Router, Request, Response, NextFunction } from 'express';
import { BaseController } from './base';

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
        const task: todo.model.Task[] = [
          { id: '1', name: 'Task1', createdAt: 'a', createdUid: '' },
          { id: '2', name: 'Task2', createdAt: 'a', createdUid: '' },
        ];
        res.json(task);
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
        res.json(task);
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
        res.json(task);
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
        res.json(task);
        next();
      } catch (err) {
        next(err);
      }
    });
  }
}
