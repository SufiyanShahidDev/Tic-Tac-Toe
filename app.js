
// const initialPopup=document.querySelector(".popup-container")
// const finalPopup=document.querySelector(".popup")
// const winLosePerson=document.querySelector(".win-loose-person")
// const popupPerson=document.querySelector(".popup-person")
// const okPerson=document.querySelector(".ok-btn-person")
// const otherPerson=document.querySelector(".play-other-person")
// const aiContainer=document.querySelector(".cover-container-ai")
// const gameType=document.querySelector("#methods")
// const game=gameType.value
// const personContainer=document.querySelector(".cover-container-person")
// const winLose=document.querySelector(".win-loose")
// const okBtn=document.querySelector(".ok-btn")
// const playOther=document.querySelector(".play-other")
// const startBtn=document.querySelector(".start-btn")
// const aiBtns=document.querySelectorAll(".box-ai")
// const personBtns=document.querySelectorAll(".box-person")
// const winningPattern = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6]
// ];
// let turnO=true
// let turnP=true
// let gameOver=false

// function loadGameType(){
//     const game = gameType.value;
//     if(game==="With AI"){
//         aiContainer.style.display="grid"
//         initialPopup.style.display="none"
//         loadAi()
//     }else if(game==="2-Player"){
//         initialPopup.style.display="none"
//         personContainer.style.display="grid"
//         loadPerson()
//     }
// }


// function loadAi(){
//     aiBtns.forEach((btns) => {
//         btns.style.pointerEvents = "auto";
//         btns.addEventListener("click", () => {
//             if (btns.innerHTML === "" && !gameOver) {
//                 if (turnO) {
//                     btns.textContent = "O";
//                     btns.style.pointerEvents = "none";
//                     turnO = false;
//                     checkWinner();  
//                     if (!checkForTie() && !gameOver) {
//                         setTimeout(checkAi, 1000);  
//                     }
//                 }
//             }
//         });
//     });
//  } 
//  function loadPerson() {
//     personBtns.forEach((btns) => {
//         btns.style.pointerEvents = "auto";
//         btns.addEventListener("click", () => {
//             if (btns.innerHTML === "" && !gameOver) {  // Ensure button is empty and game not over
//                 btns.innerHTML = turnP ? "O" : "X";
//                 turnP = !turnP;  // Toggle between "O" and "X"
//                 btns.style.pointerEvents = "none";
//                 seeWinner();
//             }
//         });
//     });
// }

 

// function checkWinner(){
//     for(let i=0; i<winningPattern.length; i++){
//         let[a,b,c]=winningPattern[i]
//         let sym1=aiBtns[a].textContent
//         let sym2=aiBtns[b].textContent
//         let sym3=aiBtns[c].textContent

//         if(sym1&&sym1===sym2&&sym2===sym3){
//             gameOver=true
//             setTimeout(() => {
//                 finalPopup.style.display="flex"
//             }, 500); 
//             winLose.textContent=`Winner is ${sym1}`
            
//         }
//     }
// }
// function seeWinner(){
//     let isWinner=false
//     for(let i=0; i<winningPattern.length; i++){
//         let[a,b,c]=winningPattern[i]
//         let sym1=personBtns[a].textContent
//         let sym2=personBtns[b].textContent
//         let sym3=personBtns[c].textContent

//         if(sym1&&sym1===sym2&&sym2===sym3){
//             gameOver=true
//             isWinner=true
//             setTimeout(() => {
//                 popupPerson.style.display="flex"
//             }, 500); 
//             winLosePerson.textContent=`Winner is ${sym1}`
            
//         }
//     }
//     if(!isWinner){
//         let allFilled=Array.from(personBtns).every((btn)=>btn.innerHTML!=="")
//         if(allFilled){
//             gameOver=true
//             setTimeout(() => {
//                 popupPerson.style.display="flex"
//             }, 500); 
//             winLosePerson.textContent=`It's a tie !`
//         }
//     }
// }
// function checkForTie(){
//     let filledBox=0
//     aiBtns.forEach((btns)=>{
//         if(btns.innerHTML!==""){
//             filledBox++
            
//         }
//     })
//     if(filledBox===aiBtns.length){
//         gameOver=true
//         setTimeout(() => {
//             finalPopup.style.display="flex"
            
//         }, 500); 
//         winLose.textContent=`It's a tie !`
//     }

// }

// function checkAi(){
//     if (gameOver) return;
//     for(let i=0; i<winningPattern.length; i++){
//         let[a,b,c]=winningPattern[i]
//         let sym1=aiBtns[a].textContent
//         let sym2=aiBtns[b].textContent
//         let sym3=aiBtns[c].textContent
//         if(sym1==="X"&&sym2==="X"&&sym3===""){
//             aiBtns[c].textContent="X"
//             aiBtns[c].style.pointerEvents="none"
//             turnO=true
//             checkWinner()
//             return
//         }else if(sym2==="X"&&sym3==="X"&&sym1===""){
//             aiBtns[a].textContent="X"
//             aiBtns[a].style.pointerEvents="none"
//             turnO=true
//             checkWinner()
//             return
//         }else if(sym3==="X"&&sym1==="X"&&sym2===""){
//             aiBtns[b].textContent="X"
//             aiBtns[b].style.pointerEvents="none"
//             turnO=true
//             checkWinner()
//             return
//         }
//     }

//     for(let i=0; i<winningPattern.length; i++){
//         let[a,b,c]=winningPattern[i]
//         let sym1=aiBtns[a].textContent
//         let sym2=aiBtns[b].textContent
//         let sym3=aiBtns[c].textContent
//         if(sym1==="O"&&sym2==="O"&&sym3===""){
//             aiBtns[c].textContent="X"
//             aiBtns[c].style.pointerEvents="none"
//             checkWinner()
//             turnO=true
//             return
//         }else if(sym2==="O"&&sym3==="O"&&sym1===""){
//             aiBtns[a].textContent="X"
//             aiBtns[a].style.pointerEvents="none"
//             checkWinner()
//             turnO=true
//             return
//         }else if(sym3==="O"&&sym1==="O"&&sym2===""){
//             aiBtns[b].textContent="X"
//             aiBtns[b].style.pointerEvents="none"
//             checkWinner()
//             turnO=true
//             return
//         }
//     }
    
    
    
//    let emptyBoxes=Array.from(aiBtns).filter((btns)=>btns.textContent==="")
//    if(emptyBoxes.length>0){
//     let randomIndex=Math.floor(Math.random()*emptyBoxes.length)
//     emptyBoxes[randomIndex].textContent="X"
//     emptyBoxes[randomIndex].style.pointerEvents="none"
//     turnO=true
//     checkWinner()
//    }

// }

// function reset(){
//     finalPopup.style.display="none"
//     aiBtns.forEach((btns)=>{
//         btns.innerHTML=""
        
//     })
    
//     gameOver=false
//     turnO=true
//     loadAi()
    
// }
// function resetPerson() {
//     popupPerson.style.display = "none";
//     personBtns.forEach((btns) => {
//         btns.innerHTML = "";
//         btns.style.pointerEvents = "auto";  
//     });
    
//     gameOver = false;  
//     turnP = true;  
//     loadPerson();  
// }



// startBtn.addEventListener("click",()=>{
//     loadGameType()
// })
// okBtn.addEventListener("click",reset)
// okPerson.addEventListener("click",resetPerson)
// const containers=document.querySelectorAll(".containers")
// playOther.addEventListener("click",()=>{
//     finalPopup.style.display="none"
//     aiBtns.forEach((btns)=>{
//         btns.innerHTML=""
        
//     })
//     personBtns.forEach((btn)=>{
//         btn.innerHTML=""
//     })
//     gameOver=false
//     turnO=true
//     loadAi()
//     finalPopup.style.display="none"
//     initialPopup.style.display="flex"
//     aiContainer.style.display="none"
    
    
// })
// otherPerson.addEventListener("click",()=>{
//     popupPerson.style.display="none"
//     personBtns.forEach((btns)=>{
//         btns.innerHTML=""
        
//     })
//     gameOver=false
//     turnP=true
//     loadPerson()
//     popupPerson.style.display="none"
//     initialPopup.style.display="flex"
//     personContainer.style.display="none"
// })
