import express from 'express';
import ErrorHandler from './middlewares/ErrorHandler';
import CarsRoutes from './Routes/CarsRoutes';
// import MotorcyclesRoutes from './Routes/MotorcyclesRoutes';

const app = express();
app.use(express.json());
app.use(CarsRoutes);
// app.use(MotorcyclesRoutes);

app.use(ErrorHandler.handle);

export default app;
