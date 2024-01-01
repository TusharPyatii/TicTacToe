let boxes=document.querySelectorAll(".box");
let resetb=document.querySelector("#reset");
let newgame=document.querySelector("#gameb");
let msgcon=document.querySelector(".msg ");
let msgg=document.querySelector("#msg");
let turnO= true; //PlayerO,PlayerX
let count=0;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turnO=true;
    enableboxes();
    msgcon.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="0";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
    box.disabled=true;
         count++;
        let iswin=checkWinner();
        if(count===9 && !iswin){
            gamedraw();
        }
    });
});
const gamedraw=()=>{
    msgcon.innerText=`Game was a draw`;
    msgcon.classList.remove("hide");
    disableboxes();
};


const enableboxes=()=>{
    for(let box of boxes){
      box.disabled=false;
    box.innerText= "";  
    }
}

const disableboxes=()=>{
    for(let box of boxes)
    box.disabled=true;
}

const showWinner=(winner)=>{
    msgg.innerText=`Congratulations,Winner is ${winner}`;
    msgcon.classList.remove("hide");
    disableboxes();

}
const checkWinner=()=>{
    for(let pattern of winPatterns){
            let pos1val=boxes[pattern[0]].innerText;
            let pos2val=boxes[pattern[1]].innerText;
            let pos3val=boxes[pattern[2]].innerText;

            if(pos1val!="",pos2val!="",pos3val!=""){
                if(pos1val==pos2val && pos2val==pos3val){
                    showWinner(pos1val); 
                    return true;
                }
            }
    }
}; 
newgame.addEventListener("click", resetGame);
resetb.addEventListener("click", resetGame);
