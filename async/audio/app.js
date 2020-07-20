const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  let sum = 0;
  for (let i = 0; i < 1e11; i++) {
    sum += i;
  }
  console.log(sum);
});
