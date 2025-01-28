let boxes = document.querySelectorAll('.box');

let resetBtn = document.querySelector('#reset-btn');

let winnerName = document.querySelector('#winner');

let turnO = true;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]; 

const hideMsg = () => {
    winnerName.setAttribute('hidden','');
}

const showMsg = () => {
    winnerName.removeAttribute('hidden');
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {

        if(turnO === true){
            box.innerText = 'P';
            turnO = false;
        }else{
            box.innerText = 'Y';
            turnO = true; 
        }
        box.disabled = true;

        // check winner positions
        checkWinner();

    });
});

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = '';
    }
}

resetBtn.addEventListener('click', () => {
    enabledBoxes();
    turnO = true; 
    winnerName.innerText = '';
    hideMsg();
});

hideMsg()

// check winner
const checkWinner = () => {
    for (const pat of winPattern) {

        let pos1 = boxes[pat[0]].innerText;
        let pos2 = boxes[pat[1]].innerText;
        let pos3 = boxes[pat[2]].innerText;

        if(pos1 != '' && pos2 != '' && pos3 != ''){

            if(pos1 === pos2 && pos2 === pos3){

                winnerName.innerText = "The Winner is: "+ pos1;

                disabledBoxes();

                showMsg();

            }
        }        
    }
};