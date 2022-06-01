'use strict';

const select = document.querySelector('#game');
const selectButton=document.querySelector('button#select');
const result = document.querySelector('.result');
const game = result.querySelectorAll('.game');

selectButton.addEventListener('click', ()=>{
    game.forEach((el, idx)=>{
        if (select.value === 'playoff') {
            if(idx===0){
                el.classList.add('playoff');
            }else{
                el.classList.remove('playoff');
            }
            console.log(select.value);
        }else if(select.value === 'semiplayoff'){
            if(idx===1){
                el.classList.add('playoff');
            }else{
                el.classList.remove('playoff');
            }
            console.log(select.value);
        }else if(select.value === '6round'){
            if(idx===2){
                el.classList.add('playoff');
            }else{
                el.classList.remove('playoff');
            }
            console.log(select.value);
        }
    
    })
    
})
