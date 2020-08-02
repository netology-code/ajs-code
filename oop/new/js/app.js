'use strict';
{
  function App() { }

  App.prototype.demo = function() {
    console.log(this);
  }

  const app = new App();
  const result = new app.demo(); // OK
}

// реализация на классах
{
  class App {
    demo() {
      console.log(this);
    }
  }

  const app = new App();
  const result = new app.demo(); // TypeError
}
