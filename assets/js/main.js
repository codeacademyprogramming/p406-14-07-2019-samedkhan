// Object methods

// Object.create

const vehicle = {
  engine: '4.2',
  type: null,
  color: null,
  hp: 0,
  transmission: null,
};

const bmw = Object.create(vehicle);
bmw.color = 'blue';
bmw.fuelType = 'diesel';

// console.log(bmw);

// Object.freeze

// Immutable
const item = {
  username: 'easa@mail.com',
  password: '123456',
  subObj: {
    name: '3',
  }
};

Object.freeze(item);

Object.freeze(item.subObj);

item.password = '*****';
item.subObj.name = 'Test';

// Object.keys

const item2 = {
  name: 'name2',
  surname: 'surname2',
  age: 'age',
};

Object.keys(item2); // Object.keys() -> array

// Object.values
const item3 = {
  name: 'name2',
  surname: 'surname2',
  age: 'age',
};

// console.log(Object.values(item3));

// Object.entries
const item4 = {
  name: 'name2',
  surname: 'surname2',
  age: 'age',
};

// console.log(Object.entries(item4));

// Object.assign
const item5 = {
  name: 'name2',
  surname: 'surname2',
  age: 'age',
};

const newObj = Object.assign({}, item5);
// console.log(`newObj`, newObj);
// console.log(`item5`, item5);
// console.log('Is equal?:', item5 === newObj);

const obj = {
  name: 'Name',
  surname: 'Surname',
  age: 21,
  isMarried: false,
  educations: [],
  type: null,
  subObj: {},
}

// 'name' -> 'string'
// 'surname' -> 'string'

const entries = Object.entries(obj);

// entries.forEach((value, index, array) => {
//   console.log(value);
//   console.log(`${value[0]} -> ${typeof value[1]}`);
// });

// for (let i = 0; i < entries.length; i++) {
//   console.log(`${entries[i][0]} -> ${typeof entries[i][1]}`);
// }

// Object.seal
const obj1 = {
  name: 'Name',
  surname: 'Surname',
  age: 21,
  isMarried: false,
  educations: [],
  type: null,
  subObj: {},
}

Object.seal(obj1);

obj1.subObj = null;
obj1.nickname = 'test';

// console.log(obj1);

// Math

// Math.abs

// console.log(Math.abs(-3.14));

// // Math.pow
// console.log(Math.pow(3, 4));

// // console.log(Math.pow('a', 4));

// console.log(Math.ceil(3.1));

// console.log(Math.floor(3.7));

// console.log(Math.round(3.74));

// console.log(Math.sqrt(81));

// console.log(Math.max(true, false));
// console.log(Math.min(1, 2, 3, 1, 3, -3, -6));

// console.log(Math.random());

// console.log(Math.trunc(-3.13));

// Date 

const date = new Date();

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());

function callMe() {
  console.log('callMe');
}

function callFilankes() {
  console.log('calling filankes');
}

// setTimeout(
//   () => {
//     callMe();
//     callFilankes();
//   },
//   5000
// );

// const interval = setInterval(() => {
//   callMe();
//   callFilankes();
// }, 1000);

// setTimeout(() => {
//   clearInterval(interval);
// }, 5000);

const obj2 = {
  name: 'Init'
}

const request = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (obj2.name === 'Init') {
      obj2.name = 'Init after 1s';
      //   resolve();
    } else if (obj2.name === 'Init2') {
      //   resolve();
    } else {
      //   reject('Property name is not found');
    }
  }, 1000);
})

request.then(() => {
  console.log(obj2.name);
  console.log('Here 1');
}).then(() => {
  console.log('Here 2');
}).catch((rejectReason) => {
  console.log(rejectReason);
});

// console.log(obj2.name);

const studentsList = ['John', 'Doe', 'John 2', 'Doe 2'];

const products = [
  { name: 'name 1', price: 21 },
  { name: 'name 2', price: 32 },
  { name: 'name 3', price: 123 },
  { name: 'name 4', price: 333 },
];
// studentsList.splice(1, 1, 'Doe 2');

// console.log(studentsList.slice(0, 2));
// console.log(studentsList);

// console.log(
//   studentsList.map((value, index) => {
//     return 'Salam';
//   })
// );

const totalValue = products.reduce(
  (totalPrice, currentValue) => {
    // console.log(currentValue);
    return totalPrice + currentValue.price;
  },
  0
)

// Dogum tarixinizden bugune qeder kecen zaman deqiqeler.

