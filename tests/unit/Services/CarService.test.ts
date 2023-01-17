import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import {
  inputCreateCar, inputUpdateCar, outputAllCars, outputOneCarById, outputUpdateCar,
} from '../mockCars';

describe('Test > CarService', function () {
  const service = new CarService();
  afterEach(function () {
    sinon.restore();
  });

  describe('Test > createOneCar', function () {
    it('201', async function () {
      sinon.stub(Model, 'create').resolves(outputOneCarById);
      const result = await service.createOneCar(inputCreateCar);
      expect(result).to.be.deep.equal(outputOneCarById);
    });
  });
  
  describe('Test > getAllCars', function () {
    it('200', async function () {
      sinon.stub(Model, 'find').resolves(outputAllCars);
      const result = await service.getAllCars();
      expect(result).to.be.deep.equal(outputAllCars);
    });
  });

  describe('Test > getCarById', function () {
    it('200', async function () {
      sinon.stub(Model, 'findById').resolves(outputOneCarById);
      const result = await service.getCarById('6348513f34c397abcad041b2');
      expect(result).to.be.deep.equal(outputOneCarById);
    });
    it('422', async function () {
      try {
        await service.getCarById('INVALID ID');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });
    it('404', async function () {
      try {
        sinon.stub(Model, 'findById').resolves(null);
        await service.getCarById('XXXXXXXXXXXXXXXXXXXXXXXX');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Car not found');
      }
    });
  });

  describe('Test > updateCarById', function () {
    it('200', async function () {
      const { id } = outputUpdateCar;
      sinon.stub(Model, 'findByIdAndUpdate').resolves(outputOneCarById);
      const result = await service.updateCarById(id, inputUpdateCar);
      expect(result).to.be.deep.equal(outputOneCarById);
    });
    it('422', async function () {
      try {
        await service.updateCarById('INVALID ID', inputUpdateCar);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });
    it('404', async function () {
      try {
        sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
        await service.updateCarById('XXXXXXXXXXXXXXXXXXXXXXXX', inputUpdateCar);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Car not found');
      }
    });
  });
});