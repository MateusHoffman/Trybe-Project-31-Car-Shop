import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import MotorcyclesService from '../../../src/Services/MotorcyclesService';
import {
  inputCreateMotorcycle,
  inputUpdateMotorcycle,
  outputAllMotorcycles, outputOneMotorcycleById, outputUpdateMotorcycle,
} from '../mockMotorcycles';

describe('Test > MotorcyclesService', function () {
  const service = new MotorcyclesService();
  afterEach(function () {
    sinon.restore();
  });

  describe('Test > createOneCar', function () {
    it('201', async function () {
      sinon.stub(Model, 'create').resolves(outputOneMotorcycleById);
      const result = await service.createOneMotorcycles(inputCreateMotorcycle);
      expect(result).to.be.deep.equal(outputOneMotorcycleById);
    });
  });
  
  describe('Test > getAllCars', function () {
    it('200', async function () {
      sinon.stub(Model, 'find').resolves(outputAllMotorcycles);
      const result = await service.getAllMotorcycles();
      expect(result).to.be.deep.equal(outputAllMotorcycles);
    });
  });

  describe('Test > getCarById', function () {
    it('200', async function () {
      const { id } = outputOneMotorcycleById;
      sinon.stub(Model, 'findById').resolves(outputOneMotorcycleById);
      const result = await service.getMotorcycleById(id);
      expect(result).to.be.deep.equal(outputOneMotorcycleById);
    });
    it('422', async function () {
      try {
        await service.getMotorcycleById('INVALID ID');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });
    it('404', async function () {
      try {
        sinon.stub(Model, 'findById').resolves(null);
        await service.getMotorcycleById('XXXXXXXXXXXXXXXXXXXXXXXX');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Car not found');
      }
    });
  });

  describe('Test > updateMotorcycleById', function () {
    it('200', async function () {
      const { id } = outputUpdateMotorcycle;
      sinon.stub(Model, 'findByIdAndUpdate').resolves(outputOneMotorcycleById);
      const result = await service.updateMotorcycleById(id, inputUpdateMotorcycle);
      expect(result).to.be.deep.equal(outputOneMotorcycleById);
    });
    it('422', async function () {
      try {
        await service.updateMotorcycleById('INVALID ID', inputUpdateMotorcycle);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });
    it('404', async function () {
      try {
        sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
        await service.updateMotorcycleById('XXXXXXXXXXXXXXXXXXXXXXXX', inputUpdateMotorcycle);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Car not found');
      }
    });
  });
});