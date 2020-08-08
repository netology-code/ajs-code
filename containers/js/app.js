const products = [
  {
    name: 'balenciaga triple s',
    sizes: [39, 42, 45],
  },
  {
    name: 'shoes',
    sizes: [39, 42, 43],
  },
];

{
  const sizes = products.reduce((result, product) => {
    result.push(...product.sizes);

    return result;
  }, []);
  console.log(sizes);

  const uniqueSizes = sizes.reduce((result, size) => {
    result[size] = true;

    return result;
  }, {});

  console.log(Object.keys(uniqueSizes));
}

{
  const sizes = products.reduce((result, product) => {
    product.sizes.forEach(size => result.add(size));

    return result;
  }, new Set());

  console.log([...sizes]);
}

{
  const set = new Set([1, 2, 2]);
  console.log(set); // Set(2) {1, 2}
}

{
  const set = new Set([1, 2, '2']);
  console.log(set); // Set(2) {1, 2, '2'}
}

{
  const set = new Set([{foo: 'bar'}, {foo: 'bar'}]);
  console.log(set.size); // 2
}

{
  console.log(NaN === NaN); // false

  const set = new Set([NaN]);

  set.size // 1
  set.has(NaN) // true

  // но при этом:
  set.add(NaN)
  set.size // 1
}

{
  const set = new Set();
  set.add('foo')
  set.has('foo') // true
  set.size // 1

  set.delete('foo') // true, вернется false если изначально не было поля 'foo'
  set.has('foo') // false

  set.clear();
  set.size // 0
}

{
  const set = new Set([39, 42, 41]);

  // 1 способ - как итератор
  for (const size of set) {
    console.log(size);
  }

  // 2 способ - через метод forEach
  set.forEach(size => console.log(size))
}

{
  const privateData = [];

  class Client {
    constructor(name, phone, address) {
      this.name = name;
      this.phone = phone;

      privateData.push({
        name,
        phone,
        address,
      });
    }

    getAddress() {
      const isSuitable = data => (
        data.phone === this.phone &&
        data.name === this.name
      );

      const suspected = privateData.filter(isSuitable);

      return suspected[suspected.length - 1].address;
    }
  }

  const client = new Client('Vasya', '+79XXXXXXXXX', 'Moscow');
  console.log(client);
  console.log(privateData)
}

{
  const privateData = new Map();

  class Client {
    constructor(name, phone, address) {
      this.name = name;
      this.phone = phone;

      privateData.set(this, {name, phone, address});
    }

    getAddress() {
      return privateData.get(this).address;
    }
  }

  const client = new Client('Vasya', '+79XXXXXXXXX', 'Moscow');
  console.log(client);
  console.log(privateData)
}

{
  const map = new Map([['foo', 1], ['bar', 2]]);
  console.log(map); // Map(2) {"foo" => 1, "bar" => 2}
}

{
  const map = new Map();
  const buyerContacts = {
    phone: 123456789,
    email: 'test@test.ru',
  };
  map.set(buyerContacts, 'Ivan');

  map.get(buyerContacts); // Ivan
}

{
  const map = new Map([
    [{foo: 1}, 'bar'],
    [{foo: 1}, 'bar'],
  ]);

  console.log(map.size); // 2
}

{
  console.log(NaN === NaN); // false

  const map = new Map();
  map.set(NaN, 'test');

  map.size; // 1
  map.get(NaN); // test
}

{
  const map = new Map();
  map.set('foo', 1);
  map.set('bar', 2);

  map.forEach((item) => {
    console.log(item);
  });
}

{
  const map = new Map();
  map.set('foo', 1);
  map.set('bar', 2);
  map.has('foo'); // true
  map.size; // 2

  console.log([...map.keys()]); // ['foo', 'bar']

  map.delete('foo'); // true
  // вернется false если изначально не было поля 'foo'

  map.has('foo'); // false

  map.clear();
  map.size; // 0
}

{
  const privateData = new WeakMap();

  class Client {
    constructor(name, phone, address) {
      this.name = name;
      this.phone = phone;
      privateData.set(this, {name, phone, address});
    }

    getAddress() {
      return privateData.get(this).address;
    }
  }

  let client = new Client('Vasya', '+79XXXXXXXXX', 'Moscow');
  console.log(client);
  console.log(privateData)
}
