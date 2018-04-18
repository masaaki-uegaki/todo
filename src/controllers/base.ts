import { Router, NextFunction, Request, Response } from 'express';

/**
 * BaseController
 *
 * @class BaseController
 */
export abstract class BaseController {
  protected title: string;
  private scripts: string[];

  /**
   * Constructor
   *
   * @constructor
   */
  constructor() {
    this.title = 'TODO';
    this.scripts = [];
  }

  /**
   * Create the routes.
   *
   */
  public abstract create(): Router;

  /**
   * Add a JS external file to the request.
   *
   * @param src {string} The src to the external JS file.
   * @return {BaseRoute} Self for chaining
   */
  public addScript(src: string): BaseController {
    this.scripts.push(src);
    return this;
  }

  /**
   * Render a page.
   *
   * @param req {Request} The request object.
   * @param res {Response} The response object.
   * @param view {String} The view to render.
   * @param options {Object} Additional options to append to the view's local scope.
   */
  public render(req: Request, res: Response, view: string, options?: Object): void {
    res.locals.BASE_URL = '/';
    res.locals.scripts = this.scripts;
    res.locals.title = this.title;
    res.render(view, options);
  }
}
