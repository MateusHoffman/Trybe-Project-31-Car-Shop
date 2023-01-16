import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import HttpException from '../Utils/HttpException';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) return new Car(car);
    return null;
  }

  public async createOneCar(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async getAllCars() {
    const carODM = new CarODM();
    const allCars = await carODM.find();
    return allCars.map((car) => this.createCarDomain(car));
  }

  public async getCarById(id: string) {
    if (id.length !== 24) {
      throw new HttpException(422, 'Invalid mongo id');
    }
    const carODM = new CarODM();
    const car = await carODM.findById(id);
    return this.createCarDomain(car);
  }

  public async updateCarById(id: string, body: ICar) {
    const oneCarById = await this.getCarById(id);
    if (!oneCarById) {
      throw new HttpException(404, 'Car not found');
    }
    if (id.length !== 24) {
      throw new HttpException(422, 'Invalid mongo id');
    }
    const carODM = new CarODM();
    const updatedCar = await carODM.update(id, body);
    return this.createCarDomain(updatedCar);
  }
}

export default CarService;
