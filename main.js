let randomNumber = Math.floor(Math.random() * 20) + 1;
const button = document.querySelector(".btn");
const again_button = document.querySelector(".btn-play-again");
const win_button_again = document.querySelector(".btn-play-again-win");

const hidden_lower_message = document.querySelector(".hidden-lower-message");
const hidden_higher_message = document.querySelector(".hidden-higher-message");

const lose_message = document.querySelector(".overlay-lose");
const win_message = document.querySelector(".overlay-win");

let input = document.querySelector(".guess");
let guess = 0;

let score = document.querySelector(".score");
score_decrease = 100
let final_score = document.querySelector(".final-score");


if (button) {
    button.addEventListener("click", function() {
        // This code runs when the button is clicked
        input = document.querySelector(".guess");
        guess = Number(input.value);
        if(Number(score.textContent) === 0){
            // need to add a box that pops up and says game over with a play again button
            lose_message.classList.remove("hidden-lose");
            
        }else if (guess === randomNumber) {
            // need to add a box that pops up and says you win with a play again button
            win_message.classList.remove("hidden-win");
            final_score.textContent = score.textContent;
        }else{
            if (guess < randomNumber){
                hidden_higher_message.classList.add("hidden2");
                hidden_lower_message.classList.remove("hidden1");
                score.textContent = Number(score.textContent) - 100;
            }else if (guess > randomNumber){
                hidden_lower_message.classList.add("hidden1");
                hidden_higher_message.classList.remove("hidden2");
                score.textContent = Number(score.textContent) - 100;
            }
        }   
    });
}
// Attach this ONCE, outside the main button handler
if (again_button) {
    again_button.addEventListener("click", function() {
        window.open("https://www.profitableratecpm.com/r2i0ezkhbh?key=b2a2da489188566a8db0ea4a39642fac", '_blank');
        score.textContent = 1000;
        hidden_lower_message.classList.add("hidden1");
        hidden_higher_message.classList.add("hidden2");
        lose_message.classList.add("hidden-lose");
        win_message.classList.add("hidden-win");
        input.value = "";
        // If you want to reset the random number, use a variable (see note below)
        randomNumber = Math.floor(Math.random() * 20) + 1;
    });
}

if (win_button_again) {
    win_button_again.addEventListener("click", function() {
        window.open("https://www.profitableratecpm.com/r2i0ezkhbh?key=b2a2da489188566a8db0ea4a39642fac", '_blank');
        score.textContent = 1000;
        hidden_lower_message.classList.add("hidden1");
        hidden_higher_message.classList.add("hidden2");
        lose_message.classList.add("hidden-lose");
        win_message.classList.add("hidden-win");
        input.value = "";
        // If you want to reset the random number, use a variable (see note below)
        randomNumber = Math.floor(Math.random() * 20) + 1;
    });
}
