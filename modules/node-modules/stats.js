class Client { }
const timeout = 5;

const defaultClient = new Client();

module.exports = {
  Client,
  timeout,
  defaultClient,
};

console.log('stats executed');