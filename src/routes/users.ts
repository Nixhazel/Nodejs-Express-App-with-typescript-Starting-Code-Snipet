import express, { Request, Response, NextFunction } from 'express';

import { getAllData } from '../utils/users';
const router = express.Router();


/* GET users listing. */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
  const getAllUsers = getAllData("users.json")
  res.send({
    message: 'respond with a resource',
    data: getAllUsers
  });
});

export default router;
