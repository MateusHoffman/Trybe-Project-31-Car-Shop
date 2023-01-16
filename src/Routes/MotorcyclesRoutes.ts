import { Router } from 'express';
import MotorcyclesController from '../Controllers/MotorcyclesController';

const routes = Router();

routes.post(
  '/motorcycles',
  (req, res, next) => new MotorcyclesController(req, res, next).createOneMotorcycles(),
);

routes.get(
  '/motorcycles',
  (req, res, next) => new MotorcyclesController(req, res, next).getAllMotorcycles(),
);

routes.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcyclesController(req, res, next).getMotorcycleById(),
);

// routes.put(
//   '/cars/:id',
//   (req, res, next) => new MotorcyclesController(req, res, next).updateCarById(),
// );

export default routes;
