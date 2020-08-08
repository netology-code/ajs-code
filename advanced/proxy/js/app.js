const user = {name: 'Nemo', balance: 10000};
const proxy = new Proxy(user, {
  get(target, key, receiver) {
    console.log(target, key);
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    console.log(target);
    console.log(key, value);
    return Reflect.set(target, key, value, receiver);
  },
});

proxy.balance = 50000; // setter

const {balance} = proxy; // getter
