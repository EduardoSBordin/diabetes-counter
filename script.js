const btnResult = document.querySelector('#btnResult');
const numberSugar = document.querySelector('#numberSugar');
const res = document.querySelector('#res');

btnResult.addEventListener('click', () => {

    res.innerHTML = numberSugar.value;
});