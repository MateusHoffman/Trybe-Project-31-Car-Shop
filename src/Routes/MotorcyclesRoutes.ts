import { Router } from 'express';
import MotorcyclesController from '../Controllers/MotorcyclesController';

const routes = Router();

routes.post(
  '/motorcycles',
  (req, res, next) => new MotorcyclesController(req, res, next).createOneMotorcycles(),
);

// routes.get(
//   '/cars',
//   (req, res, next) => new MotorcyclesController(req, res, next).getAllMotorcycles(),
// );

// routes.get(
//   '/cars/:id',
//   (req, res, next) => new MotorcyclesController(req, res, next).getCarById(),
// );

// routes.put(
//   '/cars/:id',
//   (req, res, next) => new MotorcyclesController(req, res, next).updateCarById(),
// );

export default routes;
