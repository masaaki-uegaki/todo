import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

/* GET home page. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    res.render('index', { title: 'Express' });
  } catch (err) {
    next(err);
  }
});

export default router;
