const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  setTimeout(doMacroTask, 0);
  Promise.resolve().then(doMicroTask);
});

function doMacroTask() {
  console.log('macro');
}

function doMicroTask() {
  console.log('micro');
}
