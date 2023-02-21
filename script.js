const btnResult1 = document.querySelector('#btnResult1');
const btnReload = document.querySelector('#btnResult2');
const res = document.querySelector('#res');

const type1 = document.querySelector('#type1');
const type2 = document.querySelector('#type2');
const type3 = document.querySelector('#type3');
const type4 = document.querySelector('#type4');

const fruits = document.querySelector('#fruits');
const fBanana = document.querySelector('#banana');
const fMaca = document.querySelector('#maca');
const fKiwi = document.querySelector('#kiwi');

function checkType(){

    if(type1.checked){
        type2.disabled = true;
        type3.disabled = true;
        type4.disabled = true;
    }else{

        type2.disabled = false;
        type3.disabled = false;
        type4.disabled = false;

        if(type2.checked){
            type1.disabled = true;
            type3.disabled = true;
            type4.disabled = true;
        }else{
            type1.disabled = false;
            type3.disabled = false;
            type4.disabled = false;

            if(type3.checked){
                type1.disabled = true;
                type2.disabled = true;
                type4.disabled = true;
            }else{
                type1.disabled = false;
                type2.disabled = false;
                type4.disabled = false;

                if(type4.checked){
                    type1.disabled = true;
                    type2.disabled = true;
                    type3.disabled = true;
                }else{
                    type1.disabled = false;
                    type2.disabled = false;
                    type3.disabled = false;
                }
            }
        }

    }


}


document.querySelector('body').addEventListener('click', () => {
    
    checkType();
}); 

btnReload.addEventListener('click', () => {
        
    console.log('reload');
    location.reload();
});

btnResult1.addEventListener('click', () => {

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

    if(type3.checked){
        res.innerHTML = `<br> Voce tem diabetes tipo LADA <br>`;

        if(fruits.value === 'banana'){
            res.innerHTML += '<br> Voce pode comer 1 bananas por dia <br>';
        }
        if(fruits.value === 'maca'){
            res.innerHTML += '<br> Voce pode comer 1 maça por dia <br>';
        }
        if(fruits.value === 'kiwi'){
            res.innerHTML += '<br> Voce pode comer 1 kiwi por dia <br>';
        }
    }

    if(type4.checked){
        res.innerHTML = `<br> Voce tem diabetes gestacional <br>`;

        if(fruits.value === 'banana'){
            res.innerHTML += '<br> Voce pode comer 2 bananas por dia <br>';
        }
        if(fruits.value === 'maca'){
            res.innerHTML += '<br> Voce pode comer 2 maça por dia <br>';
        }
        if(fruits.value === 'kiwi'){
            res.innerHTML += '<br> Voce pode comer 2 kiwi por dia <br>';
        }
        
    }


});
