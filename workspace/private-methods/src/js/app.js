class Service {
  nonSecret() {
    this.#secret();
  }

  #secret() {
    console.log('private method called');
  }
}

const service = new Service();
service.nonSecret();
// service.#secret(); // не скомпилируется
