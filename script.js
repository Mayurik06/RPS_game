
let images=document.querySelectorAll('#images');


console.log(images);
for(let i=0;i<images.length;i++)
{
images[i].addEventListener("click",rps);
}



function rps(e){
    //mychoice
    let myChoice=e.target;
    console.log(myChoice);

//computerchoice
let rock=document.querySelector('.rock');
let paper=document.querySelector('.paper');
let scissor=document.querySelector('.scissor');


 let choiceArr=[rock,paper,scissor];
 let computerChoice=choiceArr[Math.floor(Math.random()*choiceArr.length)];
 console.log(computerChoice);


//message
let msgDiv=document.querySelector('.msg');
let head=document.createElement('h2');
msgDiv.appendChild(head);
console.log(computerChoice.src);


//logic
 if(myChoice==computerChoice){
  head.innerHTML="It's a Tie";
  head.style.color='yellow';
 }
 else if((myChoice.className=='rock'&& computerChoice.className=='scissor') || (myChoice.className=='scissor'&& computerChoice.className=='paper')||(myChoice.className=='paper'&& computerChoice.className=='rock')){
    head.innerHTML='You Win!';
    head.style.color='green';
}
else{
   head.innerHTML='You Loose!';
   head.style.color='red';
 
}

rps_frontend(myChoice,computerChoice);
}


//frontend
function rps_frontend(you,comp){
    document.querySelector('.rock').remove();
document.querySelector('.paper').remove();
document.querySelector('.scissor').remove();

let mydiv= document.querySelector('.your-container');
let myimg= document.createElement('img');
myimg.src=you.src;
mydiv.appendChild(myimg);

let compDiv= document.querySelector('.comp-container');
let compImg= document.createElement('img');
compImg.src=comp.src;
compDiv.appendChild(compImg);
}

