import { Router, NextFunction, Request, Response } from 'express';

import * as createError from 'http-errors';
import * as express from 'express';
import * as path from 'path';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';

import { IndexController } from './controllers/index';
import { UserController } from './controllers/user';

/**
 * Application.
 *
 * @class App
 */
export class App {
  public app: express.Application;

  /**
   * Bootstrap the application.
   *
   * @static
   * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
   */
  public static bootstrap(): App {
    return new App();
  }

  /**
   * Constructor.
   *
   * @constructor
   */
  constructor() {
    this.app = express();
    this.setConfig();
    this.setRoutes();
    this.setApiRoutes();
    this.setErrorHandler();
  }

  /**
   * Configure application
   *
   */
  private setConfig(): void {
    this.app.set('views', path.join(__dirname, 'views'));
    this.app.set('view engine', 'jade');

    this.app.use(logger('dev'));

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser());
    this.app.use(express.static(path.join(__dirname, 'public')));
  }

  /**
   * Create and return Router.
   *
   */
  private setRoutes(): void {
    // Custom routes
    this.app.use('/', new IndexController().create());
    this.app.use('/users', new UserController().create());
  }

  /**
   * Create REST API routes
   *
   */
  private setApiRoutes(): void {
  }

  /**
   * Create Error handler
   *
   */
  private setErrorHandler(): void {
    // Catch 404 and forward to error handler
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      next(createError(404));
    });

    // Error handler
    this.app.use((err: app.Error, req: Request, res: Response, next: NextFunction) => {
      // Set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      // Render the error page
      res.status(err.status || 500);
      res.render('error');
    });
  }
}
