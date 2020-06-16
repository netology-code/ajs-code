// можем ставить export перед функциями и классами
export class Client { }
// можем перед объявлением переменной
export const timeout = 5;

const defaultClient = new Client();
// export default можно писать только рядом с объявлением класса или функции
// но для переменной нужно писать отдельно
export default defaultClient; //

console.log('stats executed');

