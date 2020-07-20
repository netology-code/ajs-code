const worker = new Worker('web-worker.js');
worker.addEventListener('message', evt => {
  console.log(evt);
});
worker.addEventListener('error', evt => {
  console.error(evt);
});
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  worker.postMessage(1e11); // конечно же, мы можем отправить более сложный объект
});
