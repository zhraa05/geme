

const selctbox = document.querySelector('.select-box')
 selectxbtn = selctbox.querySelector('.playx'),
 selectobtn = selctbox.querySelector('.playy'),
 playbord = document.querySelector('.plzy-bord'),
 allbox = document.querySelectorAll('section span'),
 playars = document.querySelector('.playars'),
 resultBox = document.querySelector(".reslut-box"),
 wonText = resultBox.querySelector(".won-text"),
replayBtn = resultBox.querySelector("button");

 window.onload = ()=>{
     for(let i=0 ; i< allbox.length; i++){
         
       allbox[i].setAttribute("onclick", "clickedBox(this)");
     }
   selectxbtn.onclick = () =>{
     selctbox.classList.add('hid')
     playbord.classList.add("show")
   }
    selectobtn.onclick = () =>{
     selctbox.classList.add('hid')
     playbord.classList.add("show")
playars.setAttribute('class', "playars activ player")
   }
 }

 let playerxicon = "fas fa-times"
 let playeroicon = 'far fa-circle 4x'
 playerSign = "X"; 
 let runbot = true
function clickedBox(element){
    if(playars.classList.contains("player")){
    element.innerHTML = `<i class="${playeroicon}"></i>`; 
    playars.classList.add('activ')
            playerSign = "O"
               element.setAttribute('id', playerSign)
}else{
            element.innerHTML = `<i class="${playerxicon}"></i>`;
            playars.classList.add('activ')
            element.setAttribute('id', playerSign)
}
selectWinner()
playbord.style.pointerEvents= 'none'
element.style.pointerEvents= 'none'
let rendamDlaytim = ((Math.random()* 1000 )+ 200 ).toFixed()
setTimeout(()=>{
    bot(runbot)
},rendamDlaytim)

}



function bot(runbot){
   if(runbot){
        
    let arry=[]
      playerSign = "O"
 for(let i=0 ; i< allbox.length; i++){
     if(allbox[i].childElementCount== 0){
         arry.push(i)
     }
 }
 let rendambox= arry[Math.floor(Math.random()* arry.length)]
 if(arry.length > 0){
    if(playars.classList.contains("player")){
    allbox[rendambox].innerHTML = `<i class="${playerxicon}"></i>`; 
    playars.classList.remove('activ')
    playerSign ="X"
       allbox[rendambox].setAttribute("id", playerSign)
}
      
else{
             allbox[rendambox].innerHTML = `<i class="${playeroicon}"></i>`;
            playars.classList.remove('activ')
            allbox[rendambox].setAttribute("id", playerSign)
   }
}
 selectWinner();
}
//  allbox[rendambox].style.pointerEvents = "none";
 playbord.style.pointerEvents = "auto";
    playerSign ="X"
 }
 
 function  getclass(idname){
     return document.querySelector('.box' + idname).id
 }
function checkIdSign(val1, val2, val3, sign){
  if(getclass(val1) == sign && getclass(val2) == sign && getclass(val3) == sign){
         return true
    }
   
}

function selectWinner(){ 
    if(checkIdSign(1,2,3,playerSign) || checkIdSign(4,5,6, playerSign) || checkIdSign(7,8,9, playerSign) || checkIdSign(1,4,7, playerSign) || checkIdSign(2,5,8, playerSign) || checkIdSign(3,6,9, playerSign) || checkIdSign(1,5,9, playerSign) || checkIdSign(3,5,7, playerSign))
{

        runbot= false
        bot(runbot)
        setTimeout(()=>{
  resultBox.classList.add("show");
                playbord.classList.remove("show");
        },600)
                wonText.innerHTML = `Player <p>${playerSign}</p> won the game!`;
    }else{
        if(getclass(1) != "" && getclass(1) != "" && getclass(2) != "" && getclass(3) != "" && getclass(4) != "" && getclass(5) != "" &&  getclass(1) != "" &&getclass(6) != "" &&getclass(7) != "" &&getclass(8) != "" &&getclass(9) != "" )
   {
               runbot= false
        bot(runbot)
        setTimeout(()=>{
  resultBox.classList.add("show");
                playbord.classList.remove("show");
        },600)
                wonText.textContent = `"Match has been drawn!"`;

   }
    }
}
replayBtn.onclick = ()=>{
    window.location.reload(); //reload the current page on replay button click
}