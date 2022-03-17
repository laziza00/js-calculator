let output = document.querySelector('#output');
let remove = document.querySelector('#remove');
let openModal = document.querySelector('#openmodal');
let modal = document.querySelector('#modal')
let close = document.querySelector('#close');
let removex = document.querySelector('#removex');
let dot = document.querySelector('#dot');
let equal = document.querySelector('#equal');
let divide = document.querySelector('#divide');
let multi = document.querySelector('#multi');
let minus = document.querySelector('#minus');
let plus = document.querySelector('#plus');

let sin = document.querySelector('#sin')
let cos = document.querySelector('#cos')
let tan = document.querySelector('#tan')
let root = document.querySelector('#root')
let log = document.querySelector('#log')
let factorial = document.querySelector('#factorial');
let p = document.querySelector('#p');
let leftbracket = document.querySelector('#leftbracket');
let rightbracket = document.querySelector('#rightbracket');
let ee = document.querySelector('#ee');
let percent = document.querySelector('#percent');
let pow = document.querySelector('#pow');


let empty =''


// numberbtns
let seven = document.querySelector('#seven');
let eight = document.querySelector('#eight');
let nine = document.querySelector('#nine');
let four = document.querySelector('#four');
let fife = document.querySelector('#fife');
let six = document.querySelector('#six');
let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let zero = document.querySelector('#zero');






seven.addEventListener('click', work);
eight.addEventListener('click', work);
nine.addEventListener('click', work);
four.addEventListener('click', work);
fife.addEventListener('click', work);
six.addEventListener('click', work);
one.addEventListener('click', work);
two.addEventListener('click', work);
three.addEventListener('click', work);
zero.addEventListener('click', work);
dot.addEventListener('click', work);
multi.addEventListener('click', work);
divide.addEventListener('click', work);
plus.addEventListener('click', work);
minus.addEventListener('click', work);
leftbracket.addEventListener('click', work);
rightbracket.addEventListener('click', work);



remove.addEventListener('click', ()=> {
    output.innerHTML = ' '
})


// openmodal
openModal.addEventListener('click',function () {
    modal.classList.add('show');
    });
    
    close.addEventListener('click',function () {
    modal.classList.remove('show');
     });
// work 

function work (e) {
    output.innerHTML += e.target.value;
}

// operator work

sin.addEventListener("click", ()=>{
    output.innerHTML = Math.sin(output.innerHTML)
})
  
cos.addEventListener("click", ()=>{
    output.innerHTML = Math.cos(output.innerHTML)
})
tan.addEventListener("click", ()=>{
    output.innerHTML = Math.tan(output.innerHTML)
  })
root.addEventListener("click", ()=>{
    output.innerHTML=Math.sqrt(output.innerHTML);
  })

log.addEventListener("click",()=>{
    output.innerHTML = Math.log(output.innerHTML);
})
pow.addEventListener("click", ()=>{
    output.innerHTML = Math.pow(output.innerHTML,2)
})
percent.addEventListener("click", ()=>{

    let k = 0;
    k = (output.innerHTML*output.innerHTML)/100;
    output.innerHTML = k;

})
factorial.addEventListener("click",()=>{
    let sum = 1;
    for(let i=1; i<=output.innerHTML; i++){
      sum*=i;
    }
    output.innerHTML= sum;
} )

p.addEventListener('click', () =>{

  empty = Math.PI;
  output.innerHTML = empty;

})

ee.addEventListener('click', ()=>{

  empty ="2,7182818182846";
  output.innerHTML = empty;

})


let control =[]
// remove btn

removex.addEventListener("click", ()=>{

    let a = output.innerHTML.split('').pop()
    if(a=='-' || a=='+' || a=='/' || a=='*'){
      output.innerHTML= "";
    }
    else if(output.innerHTML<1){
      output.innerHTML= "";
    }
    else if(output.innerHTML>1){
      output.innerHTML = (output.innerHTML-a)/10;
    }
  })



equal.addEventListener("click",result);

function result(){
    let natija=(eval(output.innerHTML));
    output.textContent=natija;
}