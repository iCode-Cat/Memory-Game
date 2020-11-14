//MY VARS HERE
let box = document.querySelectorAll(".box");
const boxContainer = document.querySelector(".box-container");

//ARRAY FOR COLORS&CONTENTS
//Set 24 colors here. 12 diffrent, 12 clone. 
//We can use array.sort() to shuffle array.
let colorArray = ["aqua", "yellow", "blue", "orange", "black", "red", "blue", "yellow", "orange", "black", "aqua", "red"];
//counter
let a = 1;
let b = 0;
let click = [];
let card1, card2;
let cardFlipped;
let lockBoard = false;
let doubleClick = false;

//EVENT LOOP TO GENERATE BOXES
for (let i = 0; i < 12; i++) {

    //Create Boxes
    const boxModel = document.createElement("div");
    boxModel.setAttribute("class", "box");
    boxContainer.appendChild(boxModel);
    //Give dataset for the id.
    boxModel.setAttribute("data-color", colorArray[i])
    boxModel.style.backgroundColor = colorArray[i];


    function flipCard() {
        if(lockBoard) return;
        if(this === card1) return;

        if (!cardFlipped) {
            cardFlipped = true;
            boxModel.style.backgroundImage = "unset";
            card1 = this;
            console.log(card1.dataset.color);
            return
        } else {
            cardFlipped = false;
            boxModel.style.backgroundImage = "unset";
            card2 = this;
            ifMatch()
            +
            console.log(card2.dataset.color);
        }
        //Check if Matches!
        function ifMatch(){
            if(card1.dataset.color === card2.dataset.color){
                card1.removeEventListener("click",flipCard )
                card2.removeEventListener("click",flipCard )
                resetBoard()
            }else{
                lockBoard = true;
                setTimeout(() => {
                    card1.style.backgroundImage = "url(bg.jpg)";
                    card2.style.backgroundImage = "url(bg.jpg)";
                    resetBoard()
                }, 1500);

                function resetBoard(){
                    [cardFlipped , lockBoard] = [false, false]
                    [card1, card2] = [null , null]
                }
                
            }
        }
    }
   
    boxModel.addEventListener("click",flipCard)

    
    



}