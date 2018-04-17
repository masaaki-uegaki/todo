import { Router, NextFunction, Request, Response } from 'express';

const router: Router = Router();

/* GET users listing. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send('respond with a resource');
  } catch (err) {
    next(err);
  }
});

export default router;
