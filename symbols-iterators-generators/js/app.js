{
  Array.prototype.print = function () {
    console.log(this);
  }

    ['ds'].print(); // ["ds"]
}

{
  let sym1 = Symbol();
  let sym2 = Symbol();

  console.log(sym1 === sym2);
}

{
  // создание символа в реестре
  let name = Symbol.for('name');

  // символ уже есть, чтение из реестра
  console.log(Symbol.for('name') == name); // true
}

{
  let isAdmin = Symbol('isAdmin');

  let user = {
    name: 'Вася',
    [isAdmin]: true
  };

  console.log(user[isAdmin]); // true
}

{
  let user = {
    name: 'Вася',
    age: 30,
    [Symbol.for('isAdmin')]: true
  };

  // в цикле for..in также не будет символа
  console.log(Object.keys(user)); // name, age

  // доступ к свойству через глобальный символ — работает
  console.log(user[Symbol.for('isAdmin')]);
}

{
  let obj = {
    iterator: 1,
    [Symbol.iterator]: function () {
    },
  }

  // один символ в объекте
  console.log(Object.getOwnPropertySymbols(obj));
  // Symbol(Symbol.iterator)

  // и одно обычное свойство
  console.log(Object.getOwnPropertyNames(obj));
  // iterator
}

{
  const headSymbol = Symbol.for('array-head');

  Array.prototype[headSymbol] = function () {
    console.log(this[0]);
  }
}

{
  const head = Symbol.for('array-head');

  const arr1 = [0, 1, 2, 3, 4];
  console.log(arr1[head]()); // 0

  const arr2 = [];
  console.log(arr2[head]()); // undefined
}

{
  let range = {
    from: 1,
    to: 5
  }

  range[Symbol.iterator] = function () { // сделаем объект range итерируемым
    let current = this.from;
    let last = this.to;

    return { // метод должен вернуть объект с методом next()
      next() {
        if (current <= last) {
          return {
            done: false,
            value: current++
          };
        }

        return {
          done: true
        };
      }
    }
  };

  for (let num of range) {
    console.log(num);
  }
  // 1, затем 2, 3, 4, 5

  console.log(Math.max(...range)); // 5
}

{
  function* generateNumbers() {
    yield 111;
    yield 222;
    return 333;
  }

  let generator = generateNumbers();

  let one = generator.next();

  console.log(one); // { value: 111, done: false }
}

{
  function* generateNumbers() {
    yield 111;
    yield 222;
    return 333;
  }

  let generator = generateNumbers();

  for (let value of generator) {
    console.log(value);
  }
  // 111, затем 222
}


{
  function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) {
      yield i;
    }
  }

  function* generateAlphaNum() {
    // 0..9
    yield* generateSequence(48, 57);
    // A..Z
    yield* generateSequence(65, 90);
    // a..z
    yield* generateSequence(97, 122);
  }

  let str = '';

  for (let code of generateAlphaNum()) {
    str += String.fromCharCode(code);
  }
}

{
  function* gen() {
    // Передать вопрос во внешний код и подождать ответа
    let result = yield "2 + 2?";
    console.log(result);
  }

  let generator = gen();
  let question = generator.next().value;
  // "2 + 2?"

  setTimeout(() => generator.next(4), 2000);
  // Через  2 секунды выведется 4
}

{
  function* gen() {
    try {
      // в этой строке возникнет ошибка
      let result = yield "Сколько будет 2 + 2?";

      console.log("выше будет исключение ^^^");
    } catch(e) {
      console.log(e); // выведет ошибку
    }
  }

  let generator = gen();

  let question = generator.next().value;

  generator.throw(new Error("не знаю"));
}
