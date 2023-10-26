let div1 = document.createElement('div');
div1.classList.add('first');
let input = document.createElement('input');

let div2 = document.createElement('div');
div2.classList.add('second');

let div3 = document.createElement('div');
div3.classList.add('circle');

let button = document.createElement('button');
button.innerHTML="Click on me";
let reset = document.createElement('button');
reset.style.cssText='background:#304c26';
reset.innerHTML="Reset";



let answers = new Array("Yes","No","Maybe","Of course",
                        "I don`t think so","Exactly",
                        "Sure","Yeah","Nope","No way",
                        "I don`know");
button.onclick=()=>{
    if(input.value == 0){
        alert("Please ask a question");
    }else{
        let i = Math.floor(Math.random()*(answers.length-1));
        div3.innerHTML=answers[i];
    }
};

reset.onclick=()=>{
    div3.innerHTML='';
    input.value='';
};

let body = document.body;
div1.appendChild(input);
div2.appendChild(div3);
div2.appendChild(button);
div2.appendChild(reset);
body.appendChild(div1);
body.appendChild(div2);
