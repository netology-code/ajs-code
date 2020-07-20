self.addEventListener('message', evt => {
  let sum = 0;
  for (let i = 0; i < evt.data; i++) {
    sum += i;
  }
  self.postMessage(sum);
});
