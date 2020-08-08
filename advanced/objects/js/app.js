const user = {
  name: 'Nemo',
  balance: 10000,
};
// Вариант 1: 'dot notation'
console.log(user.name);
// Вариант 2: 'bracket notation'
console.log(user['name']);

// destructuring
{
  const {name, balance} = user;
  console.log(name, balance);
}

// add/remove props
user.address = 'Moscow';
console.log(user);
delete user.address;
console.log(user);

user['address'] = 'Moscow';
console.log(user);
delete user['address'];
console.log(user);

console.log(user.address); // undefined

if (user.address === undefined) {
  console.log('no such property');
}

{
  const {name, balance, address = 'Not specified'} = user;
  console.log(name, balance, address);
}

// destructuring
{
  user.manager = {
    name: 'Svetlana',
  };

  const {manager: {name}} = user;
  console.log(name); // only name exists, not manager

  const {manager: {name: managerName}} = user;
  console.log(managerName);

  delete user.manager;
}

// rest
{
  const {name, ...rest} = user;
  console.log(rest);

  const copy = {...user};
  console.log(user);
}

// in
{
  console.log('name' in user)
  console.log('address' in user);
  console.log('toString' in user);
}

// prototype
{
  console.log(user.__proto__);

  console.log(user.__proto__.__proto__); // null
}

const entry = {
  id: 999,
};

Object.setPrototypeOf(user, entry);
console.log(user.id); // 999

// properties enumeration
for (const prop in user) {
  console.log(prop);
}

for (const prop in user) {
  if (user.hasOwnProperty(prop)) {
    console.log(prop);
  }
}

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(Object.getOwnPropertyDescriptor(user, 'name'));
console.log(Object.getOwnPropertyDescriptor(user.__proto__.__proto__, 'toString'));

console.log(`${user}`);

user.toString = function () {
  return `User{${this.name}}`;
};

console.log(`${user}`);

const project1 = {id: 1, budget: 1};
const project2 = {id: 2, budget: 2};

console.log(project1 > project2);
console.log(project1 < project2);
console.log(project1 == project2);

project1.valueOf = function () {
  return this.budget;
}

project2.valueOf = function () {
  return this.budget;
}

console.log(project1 > project2);
console.log(project1 < project2); // true
