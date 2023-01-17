const inputCreateCar = {
  model: 'Gol',
  year: 2002,
  color: 'Gray',
  status: false,
  buyValue: 20.000,
  doorsQty: 4,
  seatsQty: 5,
};

const outputAllCars = [{
  id: '6348513f34c397abcad040b2',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
}, {
  id: '6348513f34c397abcad041b2',
  model: 'Gol',
  year: 2002,
  color: 'Gray',
  status: false,
  buyValue: 20.000,
  doorsQty: 4,
  seatsQty: 5,
}];

const outputOneCarById = {
  id: '6348513f34c397abcad041b2',
  model: 'Gol',
  year: 2002,
  color: 'Gray',
  status: false,
  buyValue: 20.000,
  doorsQty: 4,
  seatsQty: 5,
};

const inputUpdateCar = {
  model: 'Marea',
  year: 2002,
  color: 'White',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const outputUpdateCar = {
  id: '6348513f34c397abcad040b2',
  model: 'Marea',
  year: 2002,
  color: 'White',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

export {
  inputCreateCar,
  outputAllCars,
  outputOneCarById,
  inputUpdateCar,
  outputUpdateCar,
};