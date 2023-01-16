import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';
import HttpException from '../Utils/HttpException';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async createOneCar() {
    const car: ICar = {
      id: this.req.body.id,
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.createOneCar(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAllCars() {
    try {
      const allCars = await this.service.getAllCars();
      return this.res.status(200).json(allCars);
    } catch (error) {
      this.next(error);
    }
  }

  public async getCarById() {
    try {
      const oneCarById = await this.service.getCarById(this.req.params.id);
      if (!oneCarById) {
        throw new HttpException(404, 'Car not found');
      }
      return this.res.status(200).json(oneCarById);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateCarById() {
    try {
      const updatedCar = await this.service.updateCarById(this.req.params.id, this.req.body);
      return this.res.status(200).json(updatedCar);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;
