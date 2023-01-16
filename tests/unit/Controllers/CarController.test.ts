import Sinon from 'sinon';
import ICar from '../../../src/Interfaces/ICar';

describe('Test > CarController', function () {
  describe('Test > createOneCar', function () {
    it('Successfully created car', function () {
      const carInput: ICar = {
        id: '6348513f34c397abcad040b2',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.990,
        doorsQty: 4,
        seatsQty: 5,
      };
    });

    afterEach(function () {
      Sinon.restore();
    });
  });
});