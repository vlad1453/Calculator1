const all = document.querySelectorAll('.n');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const split = document.querySelector('.split');
const mnozh = document.querySelector('.mnozh');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.C');
const input = document.querySelector('#inputField');
const point = document.querySelector('.point');
let calculating = true;
let num = all.forEach((button) => {
  button.addEventListener('click', () => {
    if (!calculating) {
      input.value = '';
      input.value += button.innerText;
      calculating = true;
    }else {
      input.value += button.innerText;
    }
  });
});
plus.addEventListener('click', () => {
  input.value += '+';
  calculating = true;
});
minus.addEventListener('click', () => {
  input.value += '-';
  calculating = true;
});
split.addEventListener('click', () => {
  input.value += '/';
  calculating = true;
});
mnozh.addEventListener('click', () => {
  input.value += '*';
  calculating = true;
});
point.addEventListener('click', () => {
  input.value += '.';
  calculating = true;
});
equal.addEventListener('click', () => {
  try {
    calculating = false;
    calculatingResult = eval(input.value);
    input.value = parseFloat(calculatingResult.toFixed(2))
    
  } catch (error) {
    input.value = 'Error';
  }
});
clear.addEventListener('click', () => {
  input.value = '';
});




