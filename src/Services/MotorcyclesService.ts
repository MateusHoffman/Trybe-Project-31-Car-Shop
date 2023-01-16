import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesODM from '../Models/MotorcyclesODM';
// import HttpException from '../Utils/HttpException';

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
}

export default MotorcyclesService;
