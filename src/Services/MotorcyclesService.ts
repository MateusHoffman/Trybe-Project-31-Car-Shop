import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesODM from '../Models/MotorcyclesODM';
import HttpException from '../Utils/HttpException';

class MotorcyclesService {
  private createMotorcyclesDomain(car: IMotorcycle | null): Motorcycle | null {
    if (car) return new Motorcycle(car);
    return null;
  }

  public async createOneMotorcycles(motorcycle: IMotorcycle) {
    const motorcyclesODM = new MotorcyclesODM();
    const newMotorcycle = await motorcyclesODM.create(motorcycle);
    return this.createMotorcyclesDomain(newMotorcycle);
  }

  public async getAllMotorcycles() {
    const motorcyclesODM = new MotorcyclesODM();
    const allMotorcycles = await motorcyclesODM.find();
    return allMotorcycles.map((motor) => this.createMotorcyclesDomain(motor));
  }

  public async getMotorcycleById(id: string) {
    if (id.length !== 24) {
      throw new HttpException(422, 'Invalid mongo id');
    }
    const motorcyclesODM = new MotorcyclesODM();
    const motor = await motorcyclesODM.findById(id);
    return this.createMotorcyclesDomain(motor);
  }
}

export default MotorcyclesService;
