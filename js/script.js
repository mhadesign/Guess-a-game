let player = document.querySelector(".player");
let playerOne = document.querySelector(".player_one");
let playerOneInput = document.querySelector(".player_one_input");
let playerOneBtn = document.querySelector(".player_one_btn");
let playerOneError = document.querySelector(".player_one_error");
playerOneError.innerHTML = "Give a number,please";
let playerTwo = document.querySelector(".player_two");
playerTwo.style = "display : none";
let playerOneNumber;
playerOneBtn.addEventListener("click", () => {
  playerOneError.classList.add("error");
  if (playerOneInput.value == "") {
    playerOneError.innerHTML = "Input form is empty";
    // playerOneError.style.cssText = `
    //     display : inline-block;
    //     color: red;
    //     background : #fcdcdf;
    //     padding : 2px 10px;
    //     `;
  } else {
    // playerOneInput.value - 20;
    if (playerOneInput.value - Number()) {
      if (playerOneInput.value > 0 && playerOneInput.value <= 10) {
        playerTwo.style = "display : block";
        playerOne.style = "display : none;";
        player.innerHTML = "Player 02";
        playerOneError.innerHTML = "";
        playerOneNumber = playerOneInput.value;
        /* playerOneError.style.cssText =
      "background : #fcdcdf; color : green;  display : inline-block;padding : 2px 10px;"; */
      } else {
        playerOneError.innerHTML = "Please, give a number between 1 to 10";
      }
    } else {
      playerOneError.innerHTML = "Only number is allowed";
    }
  }
});

let playerTwoInput = document.querySelector(".player_two_input");
let playerTwoBtn = document.querySelector(".player_two_btn");
let playerTwoError = document.querySelector(".player_two_error");
let chance = document.querySelector(".chance");
let count = 5;
// playerTwoError.innerHTML = "Give a number,please";
playerTwoBtn.addEventListener("click", () => {
  // playerTwoError.classList.add("error")
  if (playerTwoInput.value == "") {
    playerTwoError.innerHTML = "Input form is empty";
  } else {
    if (playerTwoInput.value - Number()) {
      if (playerTwoInput.value > 0 && playerTwoInput.value <= 10) {
        if (playerOneNumber == playerTwoInput.value) {
          playerTwoError.innerHTML = "Player 02 is winner";
          playerTwo.style.cssText = "display : none ; padding : 0;";
        } else {
            if(count != 0){
                count--;
                chance.innerHTML = count;
            }else{
                playerTwoError.innerHTML = "Player 01 is winner";
          playerOneError.innerHTML = "";
            }
          
        }
        /* playerOneError.style.cssText =
      "background : #fcdcdf; color : green;  display : inline-block;padding : 2px 10px;"; */
      } else {
        playerTwoError.innerHTML = "Please, give a number between 1 to 10";
      }
    } else {
      playerTwoError.innerHTML = "Only number is allowed";
    }
  }
});
