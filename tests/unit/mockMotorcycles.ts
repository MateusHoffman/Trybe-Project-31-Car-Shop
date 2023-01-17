const inputCreateMotorcycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const outputAllMotorcycles = [{
  id: '6348513f34c397abcad040b2',
  model: 'Honda Cb 300f',
  year: 2012,
  color: 'black',
  status: true,
  buyValue: 15.000,
  category: 'Street',
  engineCapacity: 300,
}, {
  id: '6348513f34c397abcad045s2',
  model: 'Honda fan 160',
  year: 2012,
  color: 'red',
  status: true,
  buyValue: 8.000,
  category: 'Street',
  engineCapacity: 160,
}];

const outputOneMotorcycleById = {
  id: '6348513f34c397abcad040b2',
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const inputUpdateMotorcycle = {
  model: 'Honda CG 150',
  year: 2010,
  color: 'Yellow',
  status: true,
  buyValue: 10.000,
  category: 'Street',
  engineCapacity: 150,
};

const outputUpdateMotorcycle = {
  id: '6348513f34c397abcad040b2',
  model: 'Honda CG 150',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 10.000,
  category: 'Street',
  engineCapacity: 150,
};

export {
  inputCreateMotorcycle,
  outputAllMotorcycles,
  outputOneMotorcycleById,
  inputUpdateMotorcycle,
  outputUpdateMotorcycle,
};