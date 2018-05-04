import { Router, NextFunction, Request, Response } from 'express';

import * as createError from 'http-errors';
import * as express from 'express';
import * as session from 'express-session';
import * as path from 'path';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';
import * as csrf from 'csurf';
import * as cors from 'cors';
import * as awsServerlessExpressMiddleware from 'aws-serverless-express/middleware';
import * as history from 'connect-history-api-fallback';

import { IndexController } from './controllers/index';
import { UserController } from './controllers/user';
import { TaskController } from './controllers/task';

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

    this.preRoutes();
    this.setApiRoutes();
    this.setRoutes();
    this.postRoutes();

    this.setErrorHandler();
  }

  /**
   * Configure application
   *
   */
  private setConfig(): void {
    this.app.use(awsServerlessExpressMiddleware.eventContext());

    // this.app.set('views', path.join(__dirname, 'views'));
    // this.app.set('view engine', 'jade');

    this.app.use(logger('dev'));

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    this.app.use(cookieParser());
    this.app.use(session({
      secret: 'todo1A2B3C$!',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60 * 60 * 1000
      }
    }));

    // this.app.use(history());

    this.app.use(express.static(path.join(__dirname, '../client/dist')));
  }

  /**
   * Pre process of routing.
   *
   */
  private preRoutes(): void {
    this.app.all('/*', (req: Request, res: Response, next: NextFunction) => {
      try {
        console.log(`Pre:url=${req.url}&sessionID=${req.sessionID}&params=${JSON.stringify(req.params)}`);
        next();
      } catch (err) {
        next(err);
      }
    });
  }

  /**
   * Post process of routing.
   *
   */
  private postRoutes(): void {
    this.app.all('/*', (req: Request, res: Response, next: NextFunction) => {
      try {
        console.log(`Post:url=${req.url}&sessionID=${req.sessionID}&params=${JSON.stringify(req.params)}`);
      } catch (err) {
        next(err);
      }
    });
  }

  /**
   * Set routes.
   *
   */
  private setRoutes(): void {
    this.app.use(csrf({ cookie: true }));

    this.app.use('/', new IndexController().register());
    this.app.use('/home', (req: Request, res: Response, next: NextFunction) => {
      try {
        res.redirect('/');
        next();
      } catch (err) {
        next(err);
      }
    });
  }

  /**
   * Create REST API routes
   *
   */
  private setApiRoutes(): void {
    this.app.use(cors());

    this.app.use('/api/users', new UserController().register());
    this.app.use('/api/tasks', new TaskController().register());
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
