import { NextFunction, Request, Response } from 'express';
import MotorcyclesService from '../Services/MotorcyclesService';
import HttpException from '../Utils/HttpException';

class MotorcyclesController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcyclesService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcyclesService();
  }

  public async createOneMotorcycles() {
    try {
      const newMotorcycles = await this.service.createOneMotorcycles(this.req.body);
      return this.res.status(201).json(newMotorcycles);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAllMotorcycles() {
    try {
      const allMotorcycles = await this.service.getAllMotorcycles();
      return this.res.status(200).json(allMotorcycles);
    } catch (error) {
      this.next(error);
    }
  }

  public async getMotorcycleById() {
    try {
      const oneMotorcycleById = await this.service.getMotorcycleById(this.req.params.id);
      if (!oneMotorcycleById) {
        throw new HttpException(404, 'Motorcycle not found');
      }
      return this.res.status(200).json(oneMotorcycleById);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateMotorcycleById() {
    try {
      const updatedMotorcycle = await this.service
        .updateMotorcycleById(this.req.params.id, this.req.body);
      return this.res.status(200).json(updatedMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotorcyclesController;
