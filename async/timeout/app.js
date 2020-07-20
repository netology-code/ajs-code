const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  setTimeout(() => {
    sum = 0;
    current = 0;
    doWork();
  }, 0);
});

let sum = 0;
const start = 0;
const finish = 1e11;
let current = 0;

function doWork() {
  let sum = current;
  for (let i = 0; i < 1e6 && current < finish; i++) {
    sum += i;
    current++;
  }
  if (current === finish) {
    console.log(current);
    return;
  }
  setTimeout(doWork, 0);
}
