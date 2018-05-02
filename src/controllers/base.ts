import { Router, NextFunction, Request, Response } from 'express';

/**
 * BaseController
 *
 * @class BaseController
 */
export abstract class BaseController {
  protected title: string;
  protected csrfToken: string;
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
   * Register routes.
   *
   */
  public abstract register(): Router;

  /**
   * Add a JS external file to the request.
   *
   * @param src {string} The src to the external JS file.
   */
  protected addScript(src: string): BaseController {
    this.scripts.push(src);
    return this;
  }

  /**
   * Render page.
   *
   * @param req {Request} Request object.
   * @param res {Response} Response object.
   * @param view {String} View to render.
   * @param options {Object} Additional options to append to the view's local scope.
   */
  protected render(req: Request, res: Response, view: string, options?: Object): void {
    res.locals.BASE_URL = '/';
    res.locals.scripts = this.scripts;
    res.locals.title = this.title;
    res.locals.csrfToken = this.csrfToken;
    res.render(view, options);
  }
}
