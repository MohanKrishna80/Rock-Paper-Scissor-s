let choice=document.querySelectorAll(".choice")
let p1=document.querySelectorAll(".p1")

let opt
let ComputerId
let userWin
let userScore=0;
let computerScore=0;


let genComputerchoose=(ComputerId)=>{
     let opts=['rock','paper','scissor']
    let index=Math.floor(Math.random()*3)
    return opts[index];
   
}

 let user=document.querySelector("#userScore")
 let computer=document.querySelector("#computerScore")
 let pick=document.querySelector(".pick")
 let btn=document.querySelector('button')

const winner=(userWin)=>{
    if(userWin){
        console.log("you win")
        userScore++;
        user.innerText=userScore
        pick.innerText="You Win"
        btn.style.backgroundColor="Green"
        btn.style.color="white"
        
        
    }
    else{
         console.log("you lose ")
         computerScore++
         computer.innerText=computerScore
          pick.innerText="you lose"
        btn.style.backgroundColor="red"
        btn.style.color="white"
    }
}


let gameStart=(userId)=>{
    console.log("user choose",userId)
    // for computer choose
   const computerChoose=genComputerchoose(ComputerId)
   console.log("computerChoose",computerChoose)
   if(computerChoose===userId){
    console.log("Game was draw! try again")
      pick.innerText="Game was draw! try again"
      btn.style.backgroundColor="rgb(10, 40, 40)"
   }
   else{
     userWin=true
    if(userId==="rock"){
        userWin=computerChoose==="paper"?false:true
    }else if(userId==="paper"){
        userWin=computerChoose==="scissor"?false:true
    }else{
       userWin= computerChoose==="rock"?false:true
    }
     winner(userWin)
   }
   
  
}


choice.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userId=choice.getAttribute("id")
        
        gameStart(userId)
    })
})