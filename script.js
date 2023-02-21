const btnResult = document.querySelector('#btnResult');
const fruitName = document.querySelector('#fruitName');
const res = document.querySelector('#res');
const type1 = document.querySelector('#type1');
const type2 = document.querySelector('#type2');

const fruits = document.querySelector('#fruits');
const fBanana = document.querySelector('#banana');

function checkType(){

    if(type1.checked){
        type2.disabled = true;
    }else{
        type2.disabled = false;
    }

    if(type2.checked){
        type1.disabled = true;
    }else{
        type1.disabled = false;
    }

}

document.querySelector('body').addEventListener('click', () => {

    console.log('Ok')
    checkType();
}); 


btnResult.addEventListener('click', () => {

    console.log('Check');

    if(type1.checked){
        res.innerHTML = `<br> Voce tem diabetes tipo 1 <br>`;

        if(fruits.value === 'banana'){
            res.innerHTML += '<br> Voce pode comer 2 bananas por dia <br>';
        }
        if(fruits.value === 'maca'){
            res.innerHTML += '<br> Voce pode comer 1 maça por dia <br>';
        }
        if(fruits.value === 'kiwi'){
            res.innerHTML += '<br> Voce pode comer 6 kiwi por dia <br>';
        }
    }
    if(type2.checked){
        res.innerHTML = `<br> Voce tem diabetes tipo 2 <br>`;

        if(fruits.value === 'banana'){
            res.innerHTML += '<br> Voce pode comer 6 bananas por dia <br>';
        }
        if(fruits.value === 'maca'){
            res.innerHTML += '<br> Voce pode comer 4 maça por dia <br>';
        }
        if(fruits.value === 'kiwi'){
            res.innerHTML += '<br> Voce pode comer 8 kiwi por dia <br>';
        }
    }
    //res.innerHTML += fruitName.value;


});