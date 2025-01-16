let choice = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let msg1 = document.querySelector("#msg1");
let msg2 = document.querySelector("#msg2");

let count1 = 0;
let count2 = 0;
choice.forEach(choice =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        randomVal();
        playGame(userChoice);
    
    })
})

playGame = (userChoice) =>{
    const compChoice = randomVal();
    displayChoices(userChoice, compChoice);

    if(userChoice == compChoice){
        msg.innerText="Match draw,Try again!";
        msg.style.backgroundColor="black";
    }else{
        let userWin = true;
        console.log("userchoice: ",userChoice);
        console.log("ComputerChoice: ",compChoice);
        if(userChoice == "rock"){
            userWin = compChoice=="paper"?false:true;
        }else if(userChoice == "paper"){
            userWin = compChoice=="scissor"?false:true;
        }else{
            userWin = compChoice=="rock"?false:true;
        }
        console.log("userWin",userWin);
        displayMsg(userWin);
    }
}
displayMsg = (userWin) => {
    if(userWin == true){
        msg.innerText="You won!";
        msg.style.backgroundColor="green";
        count1++;
        num1.innerText=count1;
    }else{
        msg.innerText="You lost!";
        msg.style.backgroundColor="red";
        count2++;
        num2.innerText=count2;
    }
}

randomVal = () =>{
    const val = ["rock", "paper", "scissor"];
    const idx = Math.floor(Math.random()*3);
    // console.log(val[idx]);
    return val[idx];
}

displayChoices = (userChoice, compChoice) =>{
    msg1.innerText=`(${userChoice})`;
    msg2.innerText=`(${compChoice})`;
    msg1.style.visibility="visible";
    msg2.style.visibility="visible";
}